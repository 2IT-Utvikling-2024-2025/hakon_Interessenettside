import { useState } from 'react'
import './App.css'

function UnitConverter() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value); 
  };

}