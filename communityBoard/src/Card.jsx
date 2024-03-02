import React from 'react';

const Card = ({ imageUrl, name, cuisine, link }) => {
  return (
    <div className="Card">
      <img className="truck" src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <a href={link} target="_blank" rel="noopener noreferrer">
      <button>View Menu</button>
      </a>
    </div>
  );
};

export default Card;
