import React, { useContext, useEffect} from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css';
import { UserContext } from '../LoginPage/UserContext';

const Footer = () => {
  return (
    <AppBar  position="static" style={{ top: 'auto', bottom: 0 }} className='menu'>
      <Toolbar>
        <Typography variant="body2" color="inherit" align="center">
          &copy; 2023 Fit Fusion. All rights reserved.| Contact: info@fitfusion.com
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const Profile = () => {

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  
  useEffect(() => {
  }, [])
  
  const logout = () => {
    setUser(null);
    navigate('/login')
  }

  if (!user) return <div>Please <Link to="/login">log in</Link></div>;

  const handleProfileClick = () => {
    console.log('Profile button clicked');
  };

  const handleLogoutClick = () => {
    console.log('Logout button clicked');
  };

  const handleBMIClick = () => {
    // Implement logic to navigate to the BMI page
    console.log('BMI button clicked');
  };

  const handleDietChartClick = () => {
    // Implement logic to navigate to the Diet Chart page
    console.log('Diet Chart button clicked');
  };

  return (
    <React.Fragment>

    <AppBar position="static" className='menu'>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          FIT FUSION
        </Typography>
        
        <Link to="/dash">
        <IconButton color="inherit" onClick={handleProfileClick}>
          <AccountCircleIcon />
        </IconButton>
        </Link>

        
        <Link to="/cal">
        <IconButton color='inherit' onClick={handleBMIClick}>
        <FitnessCenterIcon />
        </IconButton>
        </Link>

        <Link to="/diet">
        <IconButton color="inherit" onClick={handleDietChartClick}>
        <RestaurantMenuIcon />
        </IconButton>
        </Link>
        
        <IconButton color="inherit" onClick={handleLogoutClick}>
        <ExitToAppIcon onClick={logout}/>
        </IconButton>

      </Toolbar>
    </AppBar>
    
    <div className='bgimage'>
    <div>
    
    <h2  className='y'>FIT FUSION WELCOMES YOU {user.username}!!<br></br></h2>
    
    <h3 className='x'>"A Healthy Outside Starts From The Inside"</h3>
  <div className='container'>
    <div className='small1'><p className='tag'>CALORIE CALCULATOR</p><br></br>
    <img src='https://png.pngtree.com/png-clipart/20230930/original/pngtree-linear-calorie-calculator-icon-for-healthy-nutrition-icon-line-calculate-vector-png-image_12920338.png' className='calc' alt=''></img><br></br><br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Calculate your calories need according to your Body Condition
    <br></br><br></br><Link to="/calc" className='bu1'><button>Calorie Calc</button></Link></div>
    <div className='small2'><p className='tag'> FOOD CALORIE CALCULATOR</p><br></br>
    <img src='https://alchemyfoodtech.com/wp-content/uploads/2021/07/healthy-plate-feature-image.jpg' className='fdcl' alt=''></img><br></br><br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Calculate your calories based on food consumed
    <br></br><br></br><Link to="/foodcalc" className='bu2'><button>Food Calc</button></Link></div>
    
    </div>
    
    <br></br>
    <br></br>
    <table className='w'>
    <tr>
    <td><img src='https://quotesbook.com/images/quotes/preview_v/food-quote-a-balanced-diet-is-a-cookie-in-each-hand-1808.jpg' height={450} width={350} alt=''></img></td>
    <td>
    <table border={1} cellPadding={20}>
    <thead>
    <th>S.NO</th>
    <th>CATEGORY</th>
    <th>RANGE</th>
    <th>LINKS</th>
    </thead>
   <tbody>
   
   <tr>
<td>1.</td>
<td>UNDER WEIGHT</td>
<td>	Less than 18.5</td>
<td><Link to="/under"><button>Know your diet</button></Link>  </td>
</tr> 

<tr>
<td>2.</td>
<td>NORMAL WEIGHT</td>
<td>18.5 to 24.9</td>
<td><Link to="/normal"><button>Know your diet</button></Link>  </td>
</tr> 
<tr>
<td>3.</td>
<td>OVER WEIGHT</td>
<td>25 to 29.9</td>
<td><Link to="/over"><button>Know your diet</button></Link>  </td>
</tr> 
<tr>
<td>4.</td>
<td>OBESITY</td>
<td>30 or Greater</td>
<td><Link to="/obese"><button>Know your diet</button></Link>  </td>
</tr> 

</tbody>
    </table>
    </td>
    </tr>
    </table>
    </div>

    <br></br>
    <br></br>
    <br></br>
    <div className='L'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/KD-FmeueFUo?si=zFUbCJ6iCBMvKQzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
    </div>
    <Footer/>
    </React.Fragment>
  );
};

export default Profile;
