import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext'; // Import UserContext
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: '',
  });
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    axios.get('')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUsers = users.filter(user => user.username === loginDetails.username && user.password===loginDetails.password);
    
    // console.log(foundUsers);

    if (foundUsers.length > 0) {
      setUser(foundUsers[0]);
      navigate('/profile')
    } else {
      alert('Account not found please register')
      navigate('/reg')
    }
  };

  const handleInputChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className='whole'>
      <div >
      <div style={{ maxWidth: '400px', margin: 'auto' }}>
       <form onSubmit={handleLogin}>
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOGIN</h2>
          <label>
            <b>USERNAME :</b>
            <input
              type="text"
              name="username"
              value={loginDetails.username}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
           <b> PASSWORD :</b>
            <input
              type="password"
              name="password"
              value={loginDetails.password}
              onChange={handleInputChange}
            />
          </label>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" className='button_log'>Login</button>
          <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Don't have an account</h5>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/reg"><button className='button_log'>Register</button></Link>
        </form>

        <br></br>
        
      </div>
       
        </div>
      
      </div>
  )
}


export default Login;

