// CardSet.js
import React, { useState } from 'react';
import Flashcard from './flashCard';
import NextButton from './NextButton.jsx';
import cardData from './cardData';

const CardSet = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    setCurrentCardIndex(randomIndex);
  };

  return (
    <div>
      <h1>Flashcard Set</h1>
      <p>Total Cards: {cardData.length}</p>
      <Flashcard card={cardData[currentCardIndex]} />
      <NextButton onNext={handleNextCard} />
    </div>
  );
};

export default CardSet;
