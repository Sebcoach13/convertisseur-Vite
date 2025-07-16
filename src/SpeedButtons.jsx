// src/SpeedButtons.jsx
import React from 'react';

function SpeedButtons({ onKmhToMs, onMsToKmh, labelKmhToMs, labelMsToKmh }) {
  return (
    <div className="buttons">
      <button onClick={onKmhToMs}>{labelKmhToMs}</button>
      <button onClick={onMsToKmh}>{labelMsToKmh}</button>
    </div>
  );
}

export default SpeedButtons;