import React, { useState } from 'react';
import API from '../services/api';

const UpiGeneration = () => {
  const [email, setEmail] = useState('');
  const [upiId, setUpiId] = useState('');

  const generateUpi = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/upi/generate', { email });
      setUpiId(data.upiId);
    } catch (error) {
      console.error('Error generating UPI:', error);
    }
  };

  return (
    <div>
      <h3>Generate UPI ID</h3>
      <form onSubmit={generateUpi}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <button type="submit">Generate</button>
      </form>
      {upiId && <p>Your UPI ID: {upiId}</p>}
    </div>
  );
};

export default UpiGeneration;
