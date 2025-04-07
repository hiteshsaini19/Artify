const express = require('express');
const mongoose = require('mongoose');
const artRoutes = require('./routes/artRoutes');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/art', artRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Hello
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});