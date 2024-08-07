import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA84mRAndwo1qugXz_Rup7EmbIp5ZONLWA",
  authDomain: "matemarket-b26c6.firebaseapp.com",
  projectId: "matemarket-b26c6",
  storageBucket: "matemarket-b26c6.appspot.com",
  messagingSenderId: "1090088473431",
  appId: "1:1090088473431:web:548c9da1b99bd2c8992412"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
