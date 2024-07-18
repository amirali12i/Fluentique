// components/ProgressUpdater.js
import React from 'react';
import { updateProgress } from '../services/progressService';

const ProgressUpdater = ({ userId }) => {
  const handleUpdateProgress = () => {
    const progressData = {
      userId: userId,
      language: "German",
      chapter: "chapter1",
      lesson: "lesson1",
      score: 85,
      completed: true
    };

    updateProgress(progressData)
      .then(response => {
        console.log('Progress updated successfully', response.data);
      })
      .catch(error => {
        console.error('Failed to update progress', error);
      });
  };

  return (
    <button onClick={handleUpdateProgress}>Update Progress</button>
  );
};

export default ProgressUpdater;
