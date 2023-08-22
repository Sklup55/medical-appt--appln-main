import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

function Navbar() {
  // Define a function for handling the icon click
  const handleClick = () => {
    // Implement your click handler logic here
  };

  return (
    <nav>
      <div className="nav__logo">
        <a href="/">
          StayHealthy{' '}
          <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 1000 1000" style={{ fill: '#3685fb' }}>
            <title>Doctor With Stethoscope SVG icon</title>
            {/* SVG path data */}
          </svg>
        </a>
        <span>.</span>
      </div>
      <div className="nav__icon" onClick={handleClick}>
        <i className="fa fa-times fa fa-bars"></i>
      </div>
      <ul className="nav__links active">
        <li className="link">
          <a href="/">Home</a>
        </li>
        <li className="link">
          <a href="#">Appointments</a>
        </li>
        <li className="link">
          <a href="../Sign_Up/Sign_Up.html">
            <button className="btn1">Sign Up</button>
          </a>
        </li>
        <li className="link">
          <a href="../Login/Login.html">
            <button className="btn1">Login</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
