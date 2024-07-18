import React, { useState } from 'react';
import './FillInTheBlankComponent.css'; // Ensure you have the CSS file for styling

const FillInTheBlankComponent = () => {
  const [answer, setAnswer] = useState('');

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div className="sentence">
      The capital of France is <input type="text" value={answer} onChange={handleInputChange} className="blank" />.
    </div>
  );
};

export default FillInTheBlankComponent;
