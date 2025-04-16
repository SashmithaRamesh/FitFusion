import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Start from './Start';
import Login from './LoginPage/Login';
import Register from './LoginPage/Register';
import Profile from './Navbar/Profile';
import BMICalculator from './BMICalculator';
import DietChart from './Navbar/DietChart';
import NormalWeight from './Weight/NormalWeight';
import Obese from './Weight/Obese';
import OverWeight from './Weight/OverWeight';
import UnderWeight from './Weight/UnderWeight';
import { UserProvider } from './LoginPage/UserContext';
import Dashboard from './Navbar/Dashboard';
import CalorieCounter from './Navbar/CalorieCounter';
import FoodCal from './Navbar/FoodCal';

const App = () => {
  return (
    <UserProvider>
    <BrowserRouter>
    
    <Routes>
        <Route path='/' element={<Start/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/reg' element={<Register/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/cal' element={<BMICalculator/>}></Route>
        <Route path='/diet' element={<DietChart/>}></Route>
        <Route path='/normal' element={<NormalWeight/>}></Route>
        <Route path='/obese' element={<Obese/>}></Route>
        <Route path='/over' element={<OverWeight/>}></Route>
        <Route path='/under' element={<UnderWeight/>}></Route>
        <Route path='/dash' element={<Dashboard/>}></Route>
        <Route path='/calc' element={<CalorieCounter/>}></Route>
        <Route path='/foodcalc' element={<FoodCal/>}></Route>
        
    </Routes>
    </BrowserRouter>
    </UserProvider>
  );
};

export default App;