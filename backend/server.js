const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const recipeRoutes = require('./routes/recipeRoutes');
const authRoutes = require('./routes/authRoutes');
const config = require('./config/config');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://ah4487855:ZinabHassan2009@ahmed.6nkfejd.mongodb.net/?retryWrites=true&appName=Ahmed', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error', err));

app.use('/recipes', recipeRoutes);
app.use('/auth', authRoutes);

app.post('/api/favorites', (req, res) => {
  const { recipeId } = req.body;
  res.status(200).json({ message: 'Recipe added to favorites' });
});

app.get('/api/recipes', (req, res) => {
  res.status(200).json(recipes);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
