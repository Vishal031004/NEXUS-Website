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
        height: '100vh', // Use 100vh to cover the full viewport height
        overflow: 'hidden',
        backgroundImage: 'url(/bgimg.jpg)', // Directly reference the image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: '20px',
          '@media (max-width: 600px)': {
            padding: '10px', // Reduce padding on smaller screens
          },
        }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          style={{ width: '500px', height: '400px' }}
          sx={{
            width: { xs: '250px', sm: '400px', md: '500px' }, // Responsive logo sizes
            height: { xs: '200px', sm: '300px', md: '400px' },
          }}
        />
      </Box>

      <Box
        sx={{
          width: '700px',
          maxWidth: '90vw', // Responsive width
          height: 'auto',
          color: '#FFFFFF',
          borderRadius: '10px',
          position: 'absolute',
          top: '65%', // Center vertically
          left: '50%', // Center horizontally
          transform: 'translate(-50%, -50%)',
          opacity: 0.85,
          textAlign: 'center', // Center text for responsiveness
          p: 2,
          '@media (max-width: 600px)': {
            p: 1, // Adjust padding for small screens
          },
        }}
      >
        <h1 style={{ fontSize: '1.5rem', margin: '10px 0' }}>
          "Unlocking Tomorrow's Technology Today!"
        </h1>
        <h3 style={{ fontSize: '1rem', margin: '5px 0' }}>
          Charting the Course of Innovation: Spearheading Revolutionary Advancements and Transformations in the Dynamic Landscape of Technology and Engineering
        </h3>
      </Box>

      <Box
        sx={{
          width: '100%',
          backgroundColor: '#000000',
          color: '#FFFFFF',
          position: 'absolute',
          top: 0,
          left: 0,
          border: '4px solid white',
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            backgroundColor: 'inherit',
            color: 'inherit',
            '& .MuiBottomNavigationAction-root': {
              color: 'white',
            },
            '& .Mui-selected': {
              color: 'blue',
            },
            '& .MuiBottomNavigationAction-label': {
              fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' }, // Adjust font size for labels
            },
          }}
        >
          <BottomNavigationAction
            component={Link}
            to="/"
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
