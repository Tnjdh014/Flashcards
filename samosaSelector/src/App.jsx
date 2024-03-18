import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  const applyUpgrade = (upgradeMultiplier, upgradeCost) => {
    if (count >= upgradeCost) {
      setMultiplier(multiplier * upgradeMultiplier);
      setCount(count - upgradeCost);
    } else {
      alert("Not enough samosas to apply the upgrade!");
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img src="/imgs/soso.png" className="samosa" onClick={updateCount} alt="Samosa" />
      </div>

      {/* Step 3: Add Upgrades */}
      <div className="container">
        {/* Double Stuffed Upgrade */}
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button onClick={() => applyUpgrade(2, 10)}>Cost: 10 samosas</button>
        </div>

        {/* Party Pack Upgrade */}
        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button onClick={() => applyUpgrade(5, 100)}>Cost: 100 samosas</button>
        </div>

        {/* Full Feast Upgrade */}
        <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10x per click</p>
          <button onClick={() => applyUpgrade(10, 1000)}>Cost: 1000 samosas</button>
        </div>
      </div>
    </div>
  );
}

export default App;
