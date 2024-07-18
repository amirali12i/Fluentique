import React from 'react';
import Slider from "react-slick";
import './UnitDisplay.scss';

const UnitDisplay = ({ units }) => {
  const settings = {
    // ...react-slick settings...
  };

  return (
    <div className="unit-display">
      <Slider {...settings}>
        {units.map(unit => (
          <div className="unit-card" key={unit.id}>
            <h2>{unit.title}</h2>
            <p>{unit.description}</p>
            <button>Start</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UnitDisplay;
