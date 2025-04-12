// require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const artRoutes = require('./routes/artRoutes');
const exhibitionRoutes = require('./routes/exhibitionRoutes');
const artistRoutes = require('./routes/artistRoutes');
const cors = require('cors');
// const dotenv = require('dotenv');



const app = express();

// console.log("MongoDB URI:", process.env.MONGODB_URI); // Check if URI is being read
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/artworks', artRoutes);
app.use('/api/exhibitions', exhibitionRoutes);
app.use('/api/artists', artistRoutes);

// Database connection
mongoose.connect("mongodb+srv://hitesh:hitesh@cluster0.ukzwg7c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => { 
        console.log('MongoDB connected');
    })
    .catch(err => console.error('MongoDB connection error:', err));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
