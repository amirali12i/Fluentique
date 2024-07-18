import React, { useState, useEffect } from 'react';
import './MultipleChoiceComponent.css';

const questions = [
  {
    questionText: 'What does it mean by Ich bin',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  // Add more questions as needed
];

const MultipleChoiceComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setFade(false), 500); // Fade in animation duration
    return () => clearTimeout(timer);
  }, [currentQuestion]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      console.log('Correct answer!');
    } else {
      console.log('Wrong answer!');
    }
    setFade(true);
    // Move to the next question or handle the end of the quiz
  };

  return (
    <div className={`card ${fade ? 'fade-in' : ''}`}>
      <div className='question-section'>
        <div className='question-count'>
          <span>Question {currentQuestion + 1}</span>
        </div>
        <div className='question-text'>{questions[currentQuestion].questionText}</div>
      </div>
      <div className='answer-section'>
        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
          <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} className='answer-button'>
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoiceComponent;
