import React from 'react';
import './Login.css';

function Login() {
  const handleClick = () => {
    // Implement your click handler logic here
  };

  return (
    <div className="container">
      <div className="login-grid">
        <div className="login-text">
          <h2>Login</h2>
        </div>
        <div className="login-text">
          Are you a new member? Sign Up Here
        </div>
        <br />
        <div className="login-form">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
              />
            </div>
            {/* Rest of the form */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
