import React, { useState } from 'react';
import './style.css'; // Import external CSS file

const CalorieCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [calories, setCalories] = useState(0);

  const calculateCalories = () => {
    let bmr;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let activityFactor;
    switch (activityLevel) {
      case 'sedentary':
        activityFactor = 1.2;
        break;
      case 'lightlyActive':
        activityFactor = 1.375;
        break;
      case 'moderatelyActive':
        activityFactor = 1.55;
        break;
      case 'veryActive':
        activityFactor = 1.725;
        break;
      case 'extraActive':
        activityFactor = 1.9;
        break;
      default:
        activityFactor = 1.2;
    }

    const totalCalories = Math.round(bmr * activityFactor);
    setCalories(totalCalories);
  };

  return (
    <div className="calorie-calculator">
    
      <h3 className='calocal'>CALORIE CALCULATOR</h3>
      <div className="input-container">
        <label>Weight (kg): </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="input"
        />
      </div>
      <div className="input-container">
        <label>Height (cm): </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="input"
        />
      </div>
      <div className="input-container">
        <label>Age: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="input"
        />
      </div>
      <div className="input-container">
        <label>Gender: </label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="input"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="input-container">
        <label>Activity Level: </label>
        <select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
          className="input"
        >
          <option value="sedentary">Sedentary</option>
          <option value="lightlyActive">Lightly Active</option>
          <option value="moderatelyActive">Moderately Active</option>
          <option value="veryActive">Very Active</option>
          <option value="extraActive">Extra Active</option>
        </select>
      </div>
      <div className='bucal'>
      <button onClick={calculateCalories} className="button">
      Calculate
      </button>
      </div>
      {calories > 0 && (
        <div>
          <h3 className="calories-output">
            Calories needed per day: {calories}
          </h3>
         
        </div>
      )}
    
    </div>
  );
};

export default CalorieCalculator;
