// routes/progressRoutes.js
const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');

// Get a user's progress
router.get('/:userId', async (req, res) => {
  try {
    const progress = await Progress.findOne({ userId: req.params.userId });
    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a user's progress
router.post('/update', async (req, res) => {
  const { userId, language, levelId, lessonId, points, badges } = req.body;
  try {
    let progress = await Progress.findOne({ userId });
    if (!progress) {
      progress = new Progress({ userId, language, levels: [] });
    }
    // Add logic to update points, badges, and lessons completed
    // ...

    await progress.save();
    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Award a badge
router.post('/awardBadge', async (req, res) => {
  const { userId, badgeId } = req.body;
  try {
    const progress = await Progress.findOne({ userId });
    if (progress && !progress.badges.includes(badgeId)) {
      progress.badges.push(badgeId);
      await progress.save();
    }
    res.json({ message: 'Badge awarded successfully', progress });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
