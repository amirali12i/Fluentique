// UserProgressComponent.js
import React, { useEffect, useState } from 'react';
import * as progressService from '../services/progressService';

const UserProgressComponent = ({ userId }) => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    progressService.fetchProgress(userId)
      .then(response => {
        setProgress(response.data);
      })
      .catch(error => console.error('Fetching progress failed', error));
  }, [userId]);

  // Updated function to handle lesson completion and potentially level up
  const handleLessonCompletion = (lessonDetails) => {
    progressService.completeLesson(lessonDetails) // Assuming completeLesson is a new method handling lesson completion and level up logic
      .then(response => {
        console.log('Progress updated', response.data);
        // Refresh progress to reflect any potential level up and new unlocks
        progressService.fetchProgress(userId)
          .then(response => {
            setProgress(response.data);
          })
          .catch(error => console.error('Fetching progress failed', error));
      })
      .catch(error => console.error('Completing lesson failed', error));
  };

  return (
    <div>
      {/* Assuming progress includes current level and milestones */}
      <h2>Current Level: {progress.currentLevel}</h2>
      <button onClick={() => handleLessonCompletion({
        userId: userId,
        language: 'German',
        chapter: 'chapter1',
        lesson: 'lesson1',
        score: 85,
        completed: true
      })}>
        Complete Lesson
      </button>
    </div>
  );
};

export default UserProgressComponent;
                