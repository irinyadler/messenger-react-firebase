import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../index';

const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
 
    <Routes>
   
      {user ? (
       
        <>
          {privateRoutes.map(({ path, element }) => (
           
            <Route key={path} path={path} element={element} />
            
          ))}
          <Route path="/chat" element={<Navigate to={CHAT_ROUTE} />} />
        
        </>
      ) : (
        <>
          {publicRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path='/login' element={<Navigate to={LOGIN_ROUTE} />} />
        </>
      )}
    </Routes>
    
  );
  
};

export default AppRouter;
