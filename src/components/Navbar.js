import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../index';
import { LOGIN_ROUTE } from '../utils/consts';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Navbar() {
  const [user]= useAuthState(auth);
  const history = useNavigate();
  
    const coursesPage = () => {
        history(LOGIN_ROUTE)
      }
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar color="secondary" position="static">
      <Toolbar variant='dense'>
        <Grid container justify={'flex-end'}>
        {  user ? 
         <Button onClick={()=> auth.signOut()}  variant="outlined" color="error">Log out</Button>
        
      :
     
      <Button onClick={coursesPage}  variant="outlined" color="success">Login</Button>
      }
        
        
        </Grid>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar