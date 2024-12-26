const express = require('express'); // Import express
const router = express.Router(); // Initialize the router
const generateUpiId = (email) => {
  const randomString = Math.random().toString(36).substring(2, 10); // Generate a random string
  const domain = "yourbank"; // Example domain for UPI ID
  return `${email.split('@')[0]}@${domain}${randomString}`;
};

// Generate and assign UPI ID to a user
router.post('/generate', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send('User not found');

    if (!user.upiId) {
      user.upiId = generateUpiId(email);
      await user.save();
    }

    res.json({ upiId: user.upiId });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;