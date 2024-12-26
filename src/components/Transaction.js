import React, { useState, useEffect } from 'react';
import API from '../services/api';

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const userId = 'your-user-id'; // Replace with actual user ID
      const { data } = await API.get(`/wallet/history/${userId}`);
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((tx) => (
          <li key={tx._id}>
            {tx.sender.name} sent {tx.amount} to {tx.receiver.name} on {new Date(tx.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
