import React from 'react';
import Box from '@mui/material/Box';
import Lottie from 'lottie-react';
import animationData from './bganimtion.json';
import eventData from './eventData';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Events = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '100vh', // Ensures background color covers entire height
        backgroundColor: 'black',
        paddingTop: '20px',
      }}
    >
      {/* Top Navigation */}
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
          onChange={(event, newValue) => setValue(newValue)}
          sx={{
            backgroundColor: 'inherit',
            color: 'inherit',
            '& .MuiBottomNavigationAction-root': {
              color: 'white',
            },
            '& .Mui-selected': {
              color: 'blue',
            },
          }}
        >
          <BottomNavigationAction component={Link} to="/" label="HomePage" icon={<HomeIcon />} />
          <BottomNavigationAction component={Link} to="/projects" label="Projects" icon={<KeyboardIcon />} />
          <BottomNavigationAction component={Link} to="/events" label="Events" icon={<EmojiEventsIcon />} />
        </BottomNavigation>
      </Box>

      {/* Title and Animation */}
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '5px' }}>
        <Box sx={{ width: '200px', height: '200px' }}>
          <Lottie animationData={animationData} loop autoplay />
        </Box>
        <Box sx={{ color: 'white', marginLeft: '20px' }}>
          <h1>EVENTS</h1>
        </Box>
      </Box>

      {/* Events Cards */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, padding: 2 }}>
        {eventData.map((event) => (
          <Card
            key={event.id}
            sx={{
              maxWidth: 345,
              margin: '20px',
              color: 'white',
              backgroundColor: 'black',
              borderRadius: '15px',
              border: '2px solid white',
              '&:hover': {
                borderColor: 'blue',
              },
              '@media (max-width: 600px)': {
                maxWidth: '100%',
              },
            }}
          >
            <CardMedia component="img" alt={event.title} height="140" image={event.image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {event.title}
              </Typography>
              <Typography variant="body2">{event.description}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Events;
