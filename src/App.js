import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from './components/Navbar'
import './App.css';
import { auth } from './index';
import AppRouter from './components/AppRouter';
import Loader from './components/Loader';


const App=()=> {
  const [user, loading, error]= useAuthState(auth);
   
  if(loading){
    return <Loader></Loader>
  }
  return (
  <>
   <Navbar></Navbar>
  <AppRouter></AppRouter>

   </>
  );
};

export default App;
