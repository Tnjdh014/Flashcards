import React, { useState } from 'react';
import Flashcard from './flashCard';
import cardData from './cardData';

const CardSet = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => {
      return (prevIndex + 1) % cardData.length;
    });
    setUserGuess('');
    setIsCorrect(null);
    setCurrentStreak(0);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) => {
      return prevIndex === 0 ? cardData.length - 1 : prevIndex - 1;
    });
    setUserGuess('');
    setIsCorrect(null);
    setCurrentStreak(0);
  };

  const handleShuffleCards = () => {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    setCurrentCardIndex(randomIndex);
    setUserGuess('');
    setIsCorrect(null);
    setCurrentStreak(0);
  };

  const handleGuessChange = (event) => {
    setUserGuess(event.target.value);
  };

  const handleSubmitGuess = () => {
    const currentCard = cardData[currentCardIndex];
    if (userGuess.toLowerCase() === currentCard.answer.toLowerCase()) {
      setIsCorrect(true);
      setCurrentStreak((prevStreak) => prevStreak + 1);
      setLongestStreak((prevLongestStreak) =>
        Math.max(prevLongestStreak, currentStreak + 1)
      );
    } else {
      setIsCorrect(false);
      setCurrentStreak(0);
    }
  };

  return (
    <div>
      <h1>Flashcard Set</h1>
      <p>Total Cards: {cardData.length}</p>
      <Flashcard card={cardData[currentCardIndex]} />
      <input type="text" value={userGuess} onChange={handleGuessChange} />
      <button onClick={handleSubmitGuess}>Check Answer</button>
      {isCorrect !== null && (
        <p>{isCorrect ? 'Correct!' : 'Incorrect! Try again.'}</p>
      )}
      <div>
        <button onClick={handlePrevCard}>Back</button>
        <button onClick={handleNextCard}>Next</button>
        <button onClick={handleShuffleCards}>Shuffle Cards</button>
      </div>
      <div>
        <p>Current Streak: {currentStreak}</p>
        <p>Longest Streak: {longestStreak}</p>
      </div>
    </div>
  );
};

export default CardSet;
