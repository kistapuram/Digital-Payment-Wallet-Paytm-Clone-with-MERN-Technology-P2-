import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <Link to="/transaction">Make a Transaction</Link>
  </div>
);

export default Dashboard;
