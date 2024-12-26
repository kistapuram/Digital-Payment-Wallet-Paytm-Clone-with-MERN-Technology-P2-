import React, { useState, useEffect } from 'react';
import API from '../services/api';

const Wallet = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('');

  const fetchBalance = async () => {
    try {
      const { data } = await API.get('/wallet/balance');
      setBalance(data.balance);
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  const addFunds = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/wallet/add-funds', { amount: Number(amount) });
      setBalance(data.balance);
      setAmount('');
    } catch (error) {
      console.error('Error adding funds:', error);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <div>
      <h3>Wallet Balance: {balance}</h3>
      <form onSubmit={addFunds}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <button type="submit">Add Funds</button>
      </form>
    </div>
  );
};

export default Wallet;
