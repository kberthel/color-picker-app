import React, { useState } from 'react';
import '../styles/styles.css'; // Add this

const ColorPicker = () => {
  const [color, setColor] = useState('#ffffff');
  const handleChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <div id="color-picker-container" style={{ backgroundColor: color }}>
      <p id="pick">Pick a Color:</p>
      <p id="hex">Hex Colour: {color}</p>
      <input
        id="color-input"
        type="color"
        value={color}
        onChange={handleChange}
      />
      
    </div>
  );
};
export default ColorPicker;
