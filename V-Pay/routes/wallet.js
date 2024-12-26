const express = require('express'); // Import express
const router = express.Router(); // Initialize the router
const Transaction = require('../models/Transaction');
router.post('/transfer', async (req, res) => {
  const { senderId, receiverId, amount } = req.body;
  try {
    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);
    if (!sender || !receiver) return res.status(404).send('User not found');
    if (sender.balance < amount) return res.status(400).send('Insufficient balance');
    sender.balance -= amount;
    receiver.balance += amount;
    await sender.save();
    await receiver.save();
    const transaction = new Transaction({ sender: sender._id, receiver: receiver._id, amount });
    await transaction.save();
    res.send('Transaction successful');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get('/history/:userId', async (req, res) => {
  try {
    const transactions = await Transaction.find({ $or: [{ sender: req.params.userId }, { receiver: req.params.userId }] }).populate('sender receiver');
    res.json(transactions);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;