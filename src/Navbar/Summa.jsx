// Logout.js

import React from 'react';
import axios from 'axios';

const Summa = () => {
  const handleLogout = () => {
    axios.post('/logout') // Assuming your Spring Boot backend has a logout endpoint
      .then(response => {
        console.log(response.data); // Optional: Log the response
        // Redirect the user to the login page or any other page
        window.location.href = '/login'; // Assuming you have a route for login
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Summa;
