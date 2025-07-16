// src/SpeedInput.jsx
import React from 'react'; 

function SpeedInput({ value, onChange, placeholder }) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}

export default SpeedInput; 