import React, { useState } from 'react';
import './FoodCal.css';

const FoodCal = () => {
  const [foods, setFoods] = useState([]);
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [totalCalories, setTotalCalories] = useState(0);

  const addFood = () => {
    if (name.trim() !== '' && calories.trim() !== '') {
      const newFood = {
        name: name.trim(),
        calories: parseInt(calories),
      };
      setFoods([...foods, newFood]);
      setTotalCalories(totalCalories + parseInt(calories));
      setName('');
      setCalories('');
    }
  };

  return (
    <div className="food-cal-container">
      <h3 className='mk'>FOOD CALORIE CALCULATOR</h3>
      <div className="input-container">
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Calories: </label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
      </div>
      <div className='jklm'>
      <button onClick={addFood}>Add Food</button>
      </div>
      <h3 className='mk'>ADDED FOODS :</h3>
      <ul className="food-list">
        {foods.map((food, index) => (
          <li key={index}>
            {food.name} - {food.calories} calories
          </li>
        ))}
      </ul>
      <h3>Total Calories: {totalCalories}</h3>
    </div>
  );
};

export default FoodCal;
