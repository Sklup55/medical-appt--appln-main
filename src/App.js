import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter, Route, and Switch
import Navbar from './Components/Navbar/Navbar';
import logo from './logo.svg'; // Import the logo image
import Home from './Components/Home/Home'; // Import your Home component
import Sign_Up from './Components/Sign_Up/Sign_Up'; // Import your Sign_Up component
import Login from './Components/Login/Login'; // Import your Login component

function App() {
  return (
    <Router> {/* Wrap your components with the Router component */}
      <div className="App">
        <Navbar />
        <Switch> {/* Use the Switch component to render only one matching Route */}
          <Route path="/" exact component={Home} /> {/* Use exact prop */}
          <Route path="/signup" component={Sign_Up} />
          <Route path="/login" component={Login} />
        </Switch>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
