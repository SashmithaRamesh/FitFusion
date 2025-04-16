import React, { useState } from 'react';
import './BMICalculator.css';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const weightInKg = parseFloat(weight);
      const heightInM = parseFloat(height) / 100; // Assuming height is provided in centimeters

      const calculatedBMI = weightInKg / (heightInM * heightInM);
      setBMI(calculatedBMI.toFixed(2));
    } else {
      setBMI(null);
    }
  };

  return (
    <div className='bg'>
    <div className='A'>
    
    
    <br></br>
      <h1>BMI CALCULATOR</h1>
      
      <br></br>
      <label>
        <b>WEIGHT (kg):</b>
        <input className='in'
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <br></br>
      <br />
      <label>
      <b>HEIGHT (cm):</b>
        <input className='in'
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <br />
      <br></br>
      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi !== null && (
        <div className='h'>
          <h2>Your BMI: {bmi}</h2>
          <h3>
          <b>BMI CATEGORIES :</b>
          </h3>
          <div className='i'>
          <table border={1} cellPadding={6}>
            <tr>
              <td>UNDERWEIGHT:</td>
              <td>Less than 18.5</td>
            </tr>
            <tr>
              <td>NORMAL WEIGHT:</td>
              <td> 18.5 to 24.9</td>
            </tr>
            <tr>
              <td>OVERWEIGHT:</td>
              <td>25 to 29.9</td>
            </tr>
            <tr>
              <td>OBESITY:</td>
              <td>30 or Greater</td>
            </tr>
          </table>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default BMICalculator;
