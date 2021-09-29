// import { BrowserRouter, Route, Link } from "react-router-dom";
import React from 'react';
import kittyphoto from "./cat-photo.jpg";
import "./App.css";
import Navbar from "./component/navbar/index";
import { faCat } from '@fortawesome/free-solid-svg-icons';

function App() {
  
  return (
    <div className="App">
        <Navbar />
        <main>
        <img src={kittyphoto} alt="an orange tabby cat wearing purple sunglasses" className="kittyphoto"/>
        <div><p>Have you ever wondered how old your cat is in human years?</p></div>
        </main>
    </div>

  );
}

export default App;
