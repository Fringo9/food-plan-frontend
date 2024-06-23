import React from 'react';

const Meal = ({ meal, time }) => {
  return (
    <div>
      <h2>{time}</h2>
      <p>{meal}</p>
    </div>
  );
};

export default Meal;
