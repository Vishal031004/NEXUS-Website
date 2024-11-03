import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div style={{
        width: '100%',
        position: 'absolute',
        height: '100%', // Use 100vh to cover the full viewport height
        overflow: 'hidden',
        backgroundImage: 'url(/bgimg.jpg)', // Directly reference the image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <img src="/logo.png" alt="Logo" style={{ width: '500px', height: '400px' }} /> {/* Adjust width as needed */}
      </Box>

      <Box
        sx={{
          width: '200px',
          color: '#FFFFFF',
          display: 'flex',
          width: '700px',
          height: '100px', // Adjust height as needed
          borderRadius: '10px', // Optional: Adds rounded corners
          position: 'absolute', // Position it absolutely // Center vertically
          left: '52.5%', // Center horizontally
          transform: 'translate(-50%, -50%)',
          opacity: 0.7,
          display: 'flex',
          flexDirection: 'column' // Translate to truly center it
        }}
      >
        <h1>"Unlocking Tomorrow's Technology Today!"</h1>
        <h3>Charting the Course of Innovation: Spearheading Revolutionary Advancements and Transformations in the Dynamic Landscape of Technology and Engineering</h3>
      </Box>

      <Box sx={{ width: '100%', backgroundColor: '#000000', color: '#FFFFFF', position: 'absolute', top: 0, left: 0 ,border: '4px solid white'}}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            backgroundColor: 'inherit',
            color: 'inherit', // Sets the text color
            '& .MuiBottomNavigationAction-root': {
              color: 'white', // Sets the color for inactive icons
            },
            '& .Mui-selected': {
              color: 'blue', // Ensures selected icons and text remain white
            }
          }}
        >
         <BottomNavigationAction 
            component={Link} 
            to="/" // Add the path for the Team page here
            label="HomePage" 
            icon={<HomeIcon />} 
          />
          <BottomNavigationAction 
            component={Link} 
            to="/projects" 
            label="Projects" 
            icon={<KeyboardIcon />} 
          />
          <BottomNavigationAction 
            component={Link} 
            to="/events" 
            label="Events" 
            icon={<EmojiEventsIcon />} 
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}

export default HomePage;
