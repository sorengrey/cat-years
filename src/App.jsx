import React, { useState, useMemo } from "react";
import kittyphoto from "./cat-photo.jpg";
import "./App.css";


function calculateCatAgeFromYears(catYears) {
  // Ensure the input is a valid positive number
  if (typeof catYears !== 'number' || catYears < 0) {
    return 0;
  }
  
  if (catYears === 1) {
    return 15;
  }
  
  if (catYears === 2) {
    return 24;
  }
  if (catYears > 2) {
    // Start with the first two years (24)
    let humanYears = 24;
    
    // Add 4 human years for every year past the second year
    const remainingYears = catYears - 2;
    humanYears += (remainingYears * 4);
    return humanYears;
  }
  
  // If years is 0 or less than 1, return 0 for now.
  return 0; 
}


export default function App() {
  // State to hold the cat's age inputs
  const [years, setYears] = useState(0);

  // Use useMemo to calculate the human age only when 'years' changes
  const humanAge = useMemo(() => {
    // We only call the calculation if years is a positive integer
    return calculateCatAgeFromYears(parseInt(years) || 0);
  }, [years]);

  const handleYearChange = (event) => {
    // Use Math.max to prevent negative numbers, and parseInt to ensure integer input
    const newYears = Math.max(0, parseInt(event.target.value, 10) || 0);
    setYears(newYears);
  };
  
  // Handler to prevent form submission
  const handleSubmit = (event) => {
      event.preventDefault();
  };


  return (
    <div className="App">
      {/* <Navbar /> */}
      <main>
        <div className="kittyphoto">
          <img
            src={kittyphoto}
            alt="an orange tabby cat wearing purple sunglasses"
          />
        </div>
        <div className="question">
          <p>Have you ever wondered how old your cat is in human years?</p>
        </div>



        <div>
          <form onSubmit={handleSubmit}>
            Enter your cat's age in years:
            <div className="inputs">
              <input
                type="number"
                name="years"
                className="years"
                placeholder="Years"
                value={years}
                onChange={handleYearChange}
                min="0"
                max="30"
              />
           
                    <div className="result-display">
            <h2>Your Cat's Human Age:</h2>
            <p className="human-age">{humanAge} years</p>
        </div>
        </div>
            <br />
            <button type="submit">Calculate</button>
          </form>
        </div>
      </main>
      <footer className="App-footer">Created by Heather Smith © 2023</footer>
    </div>
  );
}