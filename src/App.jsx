// src/App.jsx
import React, { useState } from 'react'; 
import SpeedInput from './SpeedInput'; 
import SpeedButtons from './SpeedButtons'; 
import SpeedResult from './SpeedResult'; 
import './SpeedConverter.css'; 
                               

function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  function convertKmhToMs(speed) {
    return (speed / 3.6).toFixed(1) + " m/s";
  }

  function convertMsToKmh(speed) {
    return (speed * 3.6).toFixed(1) + " km/h";
  }

  function handleKmhToMs() {
    if (inputValue === "" || isNaN(inputValue)) {
      setResult("Veuillez entrer une valeur valide");
      return;
    }
    setResult(convertKmhToMs(Number(inputValue)));
  }

  function handleMsToKmh() {
    if (inputValue === "" || isNaN(inputValue)) {
      setResult("Veuillez entrer une valeur valide");
      return;
    }
    setResult(convertMsToKmh(Number(inputValue)));
  }

  return (
    <div className="container">
      <h1>Convertisseur de vitesse</h1>
      <SpeedInput value={inputValue} onChange={setInputValue} placeholder="Entrez la vitesse" />
      <SpeedButtons
        onKmhToMs={handleKmhToMs}
        onMsToKmh={handleMsToKmh}
        labelKmhToMs="km/h → m/s"
        labelMsToKmh="m/s → km/h"
      />
      <SpeedResult value={result} placeholder="Résultat" />
    </div>
  );
}

export default App; 