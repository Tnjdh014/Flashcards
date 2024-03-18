import React, {Component, useState} from "react";

const BaristaForm = () => {
  const onNewDrink = () => {
    
  };

  const onCheckAnswer = () => {
    
  };

  return (
    <div>
      <form>
        {/* Your form inputs will go here */}
      </form>

      <button type='submit' className="button submit" onClick={onCheckAnswer}> 
        Check Answer
      </button>

      <button type="button" className="button newdrink" onClick={onNewDrink}>
        New Drink
      </button>
    </div>
  );
};

export default BaristaForm;
