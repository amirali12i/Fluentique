import React from 'react';
import './LessonCard.css';

const LessonCard = ({ lesson }) => {
  return (
    <div className="lesson-card">
      <img src={lesson.image} alt={lesson.title} className="lesson-image" />
      <div className="lesson-content">
        <h3 className="lesson-title">{lesson.title}</h3>
        <p className="lesson-description">{lesson.description}</p>
        <button className="start-lesson-btn">Start Lesson</button>
      </div>
    </div>
  );
};

export default LessonCard;
