//server.js
// 1.CREATING THE BACKEND SERVER

// import required modules
//Server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/digital_wallet', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Import routes
const authRoutes = require('./routes/auth');
const walletRoutes = require('./routes/wallet');
const upiRoutes = require('./routes/upi');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/upi', upiRoutes);

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));


