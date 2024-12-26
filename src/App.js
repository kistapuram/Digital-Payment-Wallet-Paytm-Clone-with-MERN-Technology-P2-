import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Transaction from './components/Transaction';
import UpiGeneration from './components/UpiGeneration';
import Auth from './components/Auth';
import Wallet from './components/Wallet';
import Register from './components/Register';

const App = () => {
  const [auth, setAuth] = useState(!!localStorage.getItem('token'));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/Register" element={<Register setAuth={setAuth} />} />
        <Route path="/dashboard" element={auth ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/transaction" element={auth ? <Transaction /> : <Navigate to="/login" />} />
        <Route path="/upi-generation" element={auth ? <UpiGeneration /> : <Navigate to="/login" />} />
        <Route path="/auth" element={<Auth setAuth={setAuth} />} />
        <Route path="/wallet" element={auth ? <Wallet /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
