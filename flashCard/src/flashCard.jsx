import React, { useState } from 'react';

const Flashcard = ({ card, onPrevCard, onNextCard }) => {
  const [userGuess, setUserGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [showFront, setShowFront] = useState(true);

  const handleGuessChange = (event) => {
    setUserGuess(event.target.value);
  };

  const handleSubmitGuess = () => {
    if (userGuess.toLowerCase() === card.answer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleToggleCard = () => {
    setShowFront(!showFront);
  };

  return (
    <div className="card" onClick={handleToggleCard}>
      <div className={showFront ? 'front' : 'back'}>
        <h2>{showFront ? card.question : card.answer}</h2>
      </div>
    </div>
  );
};

export default Flashcard;
