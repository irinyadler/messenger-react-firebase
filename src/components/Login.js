import React from 'react';
import {  GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '..';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { CHAT_ROUTE } from '../utils/consts';




function Login() {
  const navigate = useNavigate();
  const {auth} = useContext(Context);
  const login = async ()=>{
    const provider = new GoogleAuthProvider();
   const {user} = await signInWithPopup(auth, provider); 
   console.log(user);
 

if (user) {
  navigate(CHAT_ROUTE);
}
  }
  return (
    <Container >
      <Grid container
      style ={{height:window.innerHeight -50}}
      alignItems={'center'}
      justifyContent={'center'}>
<Grid style={{width:400, background:'lightgrey'}}
container
alignItems={'center'}
direction={'column'}>
  <Box p={5}>
  <Button onClick={login} variant="outlined" >Log in with Google</Button>
  </Box>
</Grid>
      </Grid>
  </Container>
  )
}

export default Login