import React from 'react';

const NextButton = ({ onNext }) => {
  return (
    <button onClick={onNext}>
      Next Card
    </button>
  );
};

export default NextButton;