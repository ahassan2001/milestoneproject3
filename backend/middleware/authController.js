const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/User');

const generateToken = (user) => {
  return jwt.sign(
    { userId: user._id, email: user.email },
    config.secretKey,
    { expiresIn: '1h' }
  );
};

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({
      name,
      email,
      password
    });

    await user.save();

    const token = generateToken(user);

    res.status(201).json({ token, user: { _id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    console.error('Signup failed:', error);
    res.status(500).json({ message: 'Signup failed' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);

    res.json({ token, user: { _id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    console.error('Login failed:', error);
    res.status(500).json({ message: 'Login failed' });
  }
};

module.exports = { signup, login };
