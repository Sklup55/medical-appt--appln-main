import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

function Navbar() {
  const handleClick = () => {
    // Implement your click handler logic here
  };

  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">StayHealthy</Link> {/* Use Link instead of anchor */}
        <span>.</span>
      </div>
      <div className="nav__icon" onClick={handleClick}>
        <i className="fa fa-times fa fa-bars"></i>
      </div>
      <ul className="nav__links active">
        <li className="link">
          <Link to="/">Home</Link> {/* Use Link instead of anchor */}
        </li>
        <li className="link">
          <Link to="/appointments">Appointments</Link> {/* Use Link instead of anchor */}
        </li>
        <li className="link">
          <Link to="/sign-up">
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
