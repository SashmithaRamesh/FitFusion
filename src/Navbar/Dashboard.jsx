import React, { useState, useContext } from 'react';
import { UserContext } from '../LoginPage/UserContext';
import axios from 'axios';

import './Dashboard.css';

export default function Dashboard() {
  const { user, setUser } = useContext(UserContext);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const saveChanges = async () => {
    try {
      const response = await axios.put(`http://localhost:6000/update/${user.id}`, editedUser);
      setUser(response.data); // Assuming the response contains updated user data
      alert('Changes saved successfully!');
    } catch (error) {
      console.error('Error saving changes:', error);
      alert('Failed to save changes. Please try again later.');
    }
  };

  return (
    <div className='g'>
      <br />
      <br />
      <div className='pro'>
      <h2 className='e'>PROFILE</h2>
      <table cellPadding={10} className='f'>
        <tbody>
          <tr>
            <td><b>NAME :</b></td>
            <td><input type="text" name="username" value={editedUser.username} onChange={handleInputChange} /></td>
          </tr>
          <tr>
            <td><b>AGE :</b></td>
            <td><input type="text" name="age" value={editedUser.age} onChange={handleInputChange} /></td>
          </tr>
          <tr>
            <td><b>GENDER :</b></td>
            <td><input type="text" name="gender" value={editedUser.gender} onChange={handleInputChange} /></td>
          </tr>
          <tr>
            <td><b>MOBILE NUMBER :</b></td>
            <td><input type="tel" name="contact" value={editedUser.contact} onChange={handleInputChange} /></td>
          </tr>
          <tr>
            <td><b>EMAIL :</b></td>
            <td><input type="email" name="email" value={editedUser.email} onChange={handleInputChange} /></td>
          </tr>
          <tr>
            <td><b>DIABETES :</b></td>
            <td><input type="text" name="diabetes" value={editedUser.diabetes} onChange={handleInputChange} /></td>
          </tr>
          <tr>
            <td><b>BP :</b></td>
            <td><input type="text" name="bp" value={editedUser.bp} onChange={handleInputChange} /></td>
          </tr>
          <tr>
            <td><b>HEALTH ISSUES :</b></td>
            <td><input type="text" name="diseases" value={editedUser.diseases} onChange={handleInputChange} /></td>
          </tr>
          <tr>
            <td colSpan="2" style={{ textAlign: 'center' }}>
              <button onClick={saveChanges}>Save Changes</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}
