import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling

const Home = () => (
  <div className="home-container">
    <div className="home-content">
      <h1>Welcome to V-Pay</h1>
      <p>Your one-stop solution for all digital payments.</p>
      <div className="home-buttons">
        <Link to="/login" className="home-button">Login</Link>
        <Link to="/register" className="home-button">Register</Link>
      </div>
    </div>
  </div>
);

export default Home;
