// Backend/routes/userProgress.js
const express = require('express');
const router = express.Router();
const ProgressController = require('../controllers/ProgressController');

// POST endpoint to update user progress
// Assumes receiving details like lesson completion, quiz scores, etc.
router.post('/update', ProgressController.updateProgress);

// GET endpoint to fetch user progress by their ID
router.get('/fetch/:userId', ProgressController.fetchProgress);

// Additional endpoints related to progress tracking could include:
// Handling achievements, resetting progress, etc.

module.exports = router;
