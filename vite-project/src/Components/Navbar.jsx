import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import Communionlogo from '../assets/Communionlogo.png';
import { useNavigate } from 'react-router-dom';

const pages = [
    { name: 'HOME', path: '/' },
    { name: 'EVENTS', path: '/eventspage' },
    { name: 'ABOUT', path: '/about' },
  ];
  
  function ResponsiveAppBar() {
    const navigate = useNavigate();
  
    const handleNavigate = (path) => {
      navigate(path);
    };
  
  return (
    <AppBar position="static" sx={{ backgroundColor: '#010' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img 
                src={Communionlogo} 
                alt="CommUnion Logo" 
                style={{ 
                height: '40px', 
                width: 'auto', 
                marginRight: '10px',
                }} 
                onClick={() => handleNavigate('/')}
            />

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleNavigate(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
