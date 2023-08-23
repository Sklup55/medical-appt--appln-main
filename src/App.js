import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/Sign_Up';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/signup" element={<SignUp />} /> {/* Define the route for Sign Up */}
        <Route path="/login" element={<Login />} /> {/* Define the route for Login */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// Define Home, Appointments, HealthBlog, and Reviews components as needed.
