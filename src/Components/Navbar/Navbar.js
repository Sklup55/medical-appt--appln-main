import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const handleClick = () => {
    // Implement your click handler logic here
  };

  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">
          StayHealthy{' '}
          <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 1000 1000" style={{ fill: '#3685fb' }}>
            <title>Doctor With Stethoscope SVG icon</title>
            {/* SVG path data */}
          </svg>
        </Link>
        <span>.</span>
      </div>
      <div className="nav__icon" onClick={handleClick}>
        <i className="fa fa-times fa fa-bars"></i>
      </div>
      <ul className="nav__links active">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/appointments">Appointments</Link>
        </li>
        <li className="link">
          <Link to="/signup">
            <button className="btn1">Sign Up</button>
          </Link>
        </li>
        <li className="link">
          <Link to="/login">
            <button className="btn1">Login</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
