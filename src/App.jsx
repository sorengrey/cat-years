import React, { useState } from "react";
import kittyphoto from "./cat-photo.jpg";
import "./App.css";

function calculateCatAgeFromYears(catYears) {
  if (typeof catYears !== "number" || catYears < 0) {
    return 0;
  }

  if (catYears === 1) {
    return 15;
  }

  if (catYears === 2) {
    return 24;
  }

  if (catYears > 2) {
    let humanYears = 24;
    const remainingYears = catYears - 2;
    humanYears += remainingYears * 4;
    return humanYears;
  }

  return 0;
}

export default function App() {
  const [years, setYears] = useState(0);
  const [humanAge, setHumanAge] = useState(null);

  const handleYearChange = (event) => {
    const newYears = Math.max(0, parseInt(event.target.value, 10) || 0);
    setYears(newYears);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Only calculate when form is submitted
    const calculatedAge = calculateCatAgeFromYears(years);
    setHumanAge(calculatedAge);
  };

  return (
    <div className="App">
      <main>
        <div className="container">
        <div className="kittyphoto">
          <img
            src={kittyphoto}
            alt="an orange tabby cat wearing purple sunglasses"
          />
        </div>
        
          <div className="question">
             <p>Have you ever wondered how old your kitty is in cat years?</p>
          </div>

            <div className="form-container">
             <form onSubmit={handleSubmit}>
              Enter your cat's age in years here:
            <div className="input">
              <input
                type="number"
                name="years"
                className="years"
                // placeholder="Years"
                value={years}
                onChange={handleYearChange}
                min="0"
                max="30"
              />
              {humanAge !== null && (
                <div className="result-display">
                  <h2>Your Cat's Age In Cat Years:</h2>
                  <p className="human-age">{humanAge} years</p>
                </div>
              )}
            </div>
            <br />
            <button type="submit">Calculate</button>
          </form>
        </div></div>
      </main>
      <footer className="App-footer">Created by <a href="https://www.linkedin.com/in/heathersmith17/"> Heather Smith </a> © 2025</footer>
    </div>
  );
}
