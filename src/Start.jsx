import React from 'react';
import ffLogo from './Component/ffLogo.jpeg';
import { Link } from 'react-router-dom';

const Start = () => {
  

  return (
    <div>
    <Link to="/login">
      <img src={ffLogo} alt="Logo" /></Link>

      
    </div>
  );
};

export default Start;
