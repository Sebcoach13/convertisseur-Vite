// src/SpeedResult.jsx
import React from 'react';

function SpeedResult({ value, placeholder }) {
  return (
    <input type="text" value={value} readOnly placeholder={placeholder} />
  );
}

export default SpeedResult;