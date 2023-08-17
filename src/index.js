import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIWS-JCIxqP98HhXRZG2QzAftCNjI9yDU",
  authDomain: "chat-react-fda31.firebaseapp.com",
  projectId: "chat-react-fda31",
  storageBucket: "chat-react-fda31.appspot.com",
  messagingSenderId: "905744705595",
  appId: "1:905744705595:web:b198e80690f29fa74dd41e",
  measurementId: "G-EHKHNEGFNJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const Context = createContext(null);
export  const auth =getAuth(app);
export  const firestore = getFirestore(app);
// const firestore =firebase.firestore();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value ={{
    app,
    auth,
    firestore
  }}>
  <BrowserRouter>
   <App />
  </BrowserRouter>
  </Context.Provider>
);


