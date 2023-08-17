import React from 'react';
import {Routes, Route,  Navigate, Outlet} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { privateRoutes } from '../routes';
import { publicRoutes } from '../routes';
import { auth } from '../index';
import { CHAT_ROUTE } from '../utils/consts';
import { LOGIN_ROUTE } from '../utils/consts';


function AppRouter() {
 
   const [user]= useAuthState(auth);

  return (
  
  <Routes>
  {user ? (
    privateRoutes.map(({ path, element }) => (
      <Route path={path} key={path} element={element} exact={true} />
    ))
  ) : (
    publicRoutes.map(({ path, element }) => (
      <Route path={path} key={path} element={element} exact={true} />
    ))
  )}

  {/* Define a catch-all route */}
  <Route
    path="/*"
    element={
      user ? (
        // If user is authenticated, render the outlet
        <Outlet />
      ) : (
        // If not authenticated, redirect to LOGIN_ROUTE
        <Navigate to={LOGIN_ROUTE} replace />
      )
    }
  />
</Routes>
);

}

export default AppRouter