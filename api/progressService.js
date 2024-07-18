const UserProgress = require('./models/UserProgress'); // Assuming a Mongoose model for user progress

// Define milestones for levels A1, A2, B1, B2, C1
const levelMilestones = {
  A1: { lessonsCompleted: 10, exercisesCompleted: 20, quizzesPassed: 5 },
  A2: { lessonsCompleted: 20, exercisesCompleted: 40, quizzesPassed: 10 },
  B1: { lessonsCompleted: 30, exercisesCompleted: 60, quizzesPassed: 15 },
  B2: { lessonsCompleted: 40, exercisesCompleted: 80, quizzesPassed: 20 },
  C1: { lessonsCompleted: 50, exercisesCompleted: 100, quizzesPassed: 25 },
};

// Fetch user progress
exports.fetchProgress = async (userId) => {
  try {
    const progress = await UserProgress.findOne({ userId: userId });
    if (!progress) {
      throw new Error('User progress not found');
    }
    return progress;
  } catch (error) {
    console.error('Error fetching user progress:', error);
    throw error;
  }
};

// Complete a lesson and update progress
exports.completeLesson = async (lessonDetails) => {
  const { userId, language, chapter, lesson, score, completed } = lessonDetails;
  try {
    const updateData = {
      [`languages.${language}.chapters.${chapter}.lessons.${lesson}.score`]: score,
      [`languages.${language}.chapters.${chapter}.lessons.${lesson}.completed`]: completed,
    };

    await UserProgress.updateOne({ userId: userId }, { $set: updateData });
    const updatedProgress = await UserProgress.findOne({ userId: userId });
    await checkAndUpdateMilestone(userId, updatedProgress);

    return updatedProgress;
  } catch (error) {
    console.error('Error completing lesson:', error);
    throw error;
  }
};

// Utility function to determine the next level based on current level
function getNextLevel(currentLevel) {
  const levels = Object.keys(levelMilestones);
  const currentIndex = levels.indexOf(currentLevel);
  return levels[currentIndex + 1] || null;
}

// Utility function to calculate total progress for milestones
function calculateProgress(userProgress) {
  // This function needs to be tailored to match your userProgress data structure
  // Example logic:
  let lessonsCompleted = 0, exercisesCompleted = 0, quizzesPassed = 0;
  // Logic to sum up lessons, exercises, and quizzes completed
  return { lessonsCompleted, exercisesCompleted, quizzesPassed };
}

// Check if the user has reached a new milestone and update their level
async function checkAndUpdateMilestone(userId, userProgress) {
  const currentLevel = userProgress.level;
  const nextLevel = getNextLevel(currentLevel);
  const milestonesForNextLevel = levelMilestones[nextLevel];
  if (!milestonesForNextLevel) return;

  const progress = calculateProgress(userProgress); // Adjust based on your data structure

  if (
    progress.lessonsCompleted >= milestonesForNextLevel.lessonsCompleted &&
    progress.exercisesCompleted >= milestonesForNextLevel.exercisesCompleted &&
    progress.quizzesPassed >= milestonesForNextLevel.quizzesPassed
  ) {
    await UserProgress.updateOne({ userId: userId }, { $set: { level: nextLevel } });
  }
}
