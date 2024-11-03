import React from 'react';
import Box from '@mui/material/Box'; // Import Box from MUI
import Lottie from 'lottie-react';
import animationData from './bganimation2.json';
import projectData from './projectData';
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
import HomeIcon from '@mui/icons-material/Home'; // Import HomeIcon
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Projects = () => {
  const [value, setValue] = React.useState(0); // State for BottomNavigation value

  return (
    <Box
      sx={{
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'flex-start', // Align items at the top
        height: '100vh', // Full viewport height
        backgroundColor: 'black', // Background color for the entire viewport
        paddingTop: '20px', // Optional: Add padding at the top to give some space
      }}
    >
      {/* Top Navigation */}
      <Box sx={{ width: '100%', backgroundColor: '#000000', color: '#FFFFFF', position: 'absolute', top: 0, left: 0, border: '4px solid white' }}>
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
            }
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

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        marginTop: '5px', // Reduced margin to decrease space
      }}>
        <Box>
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{
              width: '200px', 
              height: '200px'
            }}
          />
        </Box>
        <Box sx={{ color: 'white', marginLeft: '20px' }}>
          <h1>PROJECTS</h1>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {projectData.map((project) => (
          <Card
            key={project.id}
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
            }}
          >
            <CardMedia
              component="img"
              alt={project.title}
              height="140"
              image={project.image} 
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2">
                {project.description}
              </Typography>
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
}

export default Projects;
