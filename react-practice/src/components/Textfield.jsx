import React, { useState } from 'react';
import './inputfields.css';

function Converter() {
  const [inches, setInches] = useState('');
  const [centimeters, setCentimeters] = useState('');

  const handleInputChange = (e) => {
    const inchesValue = e.target.value;
    setInches(inchesValue);

    // Convert inches to centimeters
    const cmValue = parseFloat(inchesValue) * 2.54;
    if (!isNaN(cmValue)) {
      setCentimeters(cmValue.toFixed(2)); // Round to 2 decimal places
    } else {
      setCentimeters('?');
    }
  };

  return (
    <div class="converter">
      <input
        type="text"
        value={inches}
        onChange={handleInputChange}
        placeholder="Enter inches"
      />
      inches = <span>{centimeters}</span> cm
    </div>
  );
}

export default Converter;


