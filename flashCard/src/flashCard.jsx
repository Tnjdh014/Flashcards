import React, { useState } from 'react';

const flashCard = ({ card }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div>
      <h2>{card.question}</h2>
      {showAnswer && <p>{card.answer}</p>}
      <button onClick={handleShowAnswer}>Show Answer</button>
    </div>
  );
};

export default flashCard;