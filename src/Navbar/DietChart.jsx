import React from 'react';
import './DietChart.css';

const DietChart = () => {
  const dietData = [
    {
      day: 'SUNDAY',
      meals: [
        { time: 'Breakfast', t:' 8:00 - 8:30AM', menu: 'Aloo Paratha (2) + Raita (1 cup)' },
        { time: 'Mid-Meal', t:' 11:00 - 11:30AM', menu: 'Fruit Salad (1 cup) + Tender Coconut Water (1 glass)' },
        { time: 'Lunch', t:' 2:00 - 2:30PM', menu: '1 cup moong dal + 1 cup bhindi + 2 chapatti + salad' },
        { time: 'Evening', t:' 4:00 - 4:30PM', menu: 'Tea/ Coffee (1 cup) + Boiled Chana Chat (1 cup)' },
        { time: 'Dinner', t:' 8:00 - 8:30PM', menu: 'Chapati (2) + Jeera Aloo (1 cup)' },
      ],
    },
    
    {
      day: 'MONDAY',
      meals: [
        { time: 'Breakfast', t:' 8:00 - 8:30AM', menu: 'Chapati (2) + Daal (1 cup)' },
        { time: 'Mid-Meal', t:' 11:00 - 11:30AM', menu: 'Fruit Salad (1 cup) + Tender Coconut Water (1 glass)' },
        { time: 'Lunch', t:' 2:00 - 2:30PM', menu: '1 cup rajma + 1 cup gobhi aloo + 1 cup cucumber raita + 1 cup rice + 1 chapatti + onion salad' },
        { time: 'Evening', t:' 4:00 - 4:30PM', menu: 'Tea/ Coffee (1 cup) + Aloo Chat (1 cup)' },
        { time: 'Dinner', t:' 8:00 - 8:30PM', menu: 'Chapati (2) + Mix Veg.' },
      ],
    },

    {
      day: 'TUESDAY',
      meals: [
        { time: 'Breakfast', t:'8:00 - 8:30AM', menu: 'Cheela (2) + Raita (1 cup)' },
        { time: 'Mid-Meal', t:' 11:00 - 11:30AM', menu: 'Fruit Salad (1 cup) + Tender Coconut Water (1 glass)' },
        { time: 'Lunch', t:' 2:00 - 2:30PM', menu: '	1 cup chicken curry + 1 cup boiled rice + 2 chapatti + salad' },
        { time: 'Evening', t:' 4:00 - 4:30PM', menu: 'Tea/ Coffee (1 cup) + Papri Chat (1 cup)' },
        { time: 'Dinner', t:' 8:00 - 8:30PM', menu: 'Chapati (2) + Fish Curry (1 cup)' },
      ],
    },

    {
      day: 'WEDNESDAY',
      meals: [
        { time: 'Breakfast', t:'8:00 - 8:30AM', menu: 'Veg. Poha (1 cup) + Raita (1/2 cup)' },
        { time: 'Mid-Meal', t:' 11:00 - 11:30AM', menu: 'Fruit Salad (1 cup) + Tender Coconut Water (1 glass)' },
        { time: 'Lunch', t:' 2:00 - 2:30PM', menu: '1 cup white chana + palak paneer + 1 cup rice + 1 chapatti + salad' },
        { time: 'Evening', t:' 4:00 - 4:30PM', menu: 'Tea/ Coffee (1 cup) + Mur-mure Chat (1 cup)' },
        { time: 'Dinner', t:' 8:00 - 8:30PM', menu: 'Chapati (2) + Mustard Greens (1 cup)' },
      ],
    },

    {
      day: 'THURSDAY',
      meals: [
        { time: 'Breakfast', t:'8:00 - 8:30AM', menu: 'Aloo Paratha (2) + Raita (1 cup)' },
        { time: 'Mid-Meal', t:' 11:00 - 11:30AM', menu: 'Fruit Salad (1 cup) + Tender Coconut Water (1 glass)' },
        { time: 'Lunch', t:' 2:00 - 2:30PM', menu: '1 cup soy bean curry + 1 cup tinda vegetable + 2 chapatti + salad' },
        { time: 'Evening', t:' 4:00 - 4:30PM', menu: 'Tea/ Coffee (1 cup) + Boiled Chana Chat (1 cup)        ' },
        { time: 'Dinner', t:' 8:00 - 8:30PM', menu: 'Chapati (2) + Bottle Gourd Curry (1 cup)' },
      ],
    },

    {
      day: 'FRIDAY',
      meals: [
        { time: 'Breakfast', t:'8:00 - 8:30AM', menu: 'Chapati (2) + Daal (1 cup)' },
        { time: 'Mid-Meal', t:' 11:00 - 11:30AM', menu: 'Fruit Salad (1 cup) + Tender Coconut Water (1 glass)' },
        { time: 'Lunch', t:' 2:00 - 2:30PM', menu: '1 cup fish curry + 1 cup boiled rice + 1 chapatti + 1 cup ghia raita + salad' },
        { time: 'Evening', t:' 4:00 - 4:30PM', menu: 'Tea/ Coffee (1 cup) + Aloo Chat (1 cup)' },
        { time: 'Dinner', t:' 8:00 - 8:30PM', menu: 'Chapati (2) + Matar and Mushroom Curry (1 cup)' },
      ],
    },

    {
      day: 'SATURDAY',
      meals: [
        { time: 'Breakfast', t:' 8:00 - 8:30AM', menu: 'Veg Upma (1 cup) + Raita (1/2 cup)' },
        { time: 'Mid-Meal', t:' 11:00 - 11:30AM', menu: 'Fruit Salad (1 cup) + Tender Coconut Water (1 glass)' },
        { time: 'Lunch', t:' 2:00 - 2:30PM', menu: '1 cup chicken curry + 1 cup rice + salad' },
        { time: 'Evening', t:' 4:00 - 4:30PM', menu: 'Tea/ Coffee (1 cup) + Papri Chat (1 cup)' },
        { time: 'Dinner', t:' 8:00 - 8:30PM', menu: 'Chapati (2) + Kofta (1 cup)' },
      ],
    },
    // Repeat the structure for other days
  ];

  return (
    <div className='t'>
      <h2 className='z'>DIET CHART</h2>
      <table border={2} cellPadding={20} className='v'>
        <thead>
          <tr>
            <th>DAY</th>
            <th colSpan={2}>TIME</th>
            <th>MENU PLAN</th>
          </tr>
        </thead>

        <tbody>
          {dietData.map((dayData, index) => (
            <React.Fragment key={index}>
              <tr>
                <td rowSpan={dayData.meals.length}><b>{dayData.day}</b></td>
                <td>{dayData.meals[0].time}</td>
                <td>{dayData.meals[0].t}</td>
                <td>{dayData.meals[0].menu}</td>
              </tr>
              {dayData.meals.slice(1).map((meal, mealIndex) => (
                <tr key={mealIndex}>
                  <td>{meal.time}</td>
                  <td>{meal.t}</td>
                  <td>{meal.menu}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DietChart;
