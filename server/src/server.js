const express = require('express');
const mongoose = require('mongoose');
const artRoutes = require('./routes/artRoutes');
const cors = require('cors');
const dotenv = require('dotenv');
// dotenv.config(); // Load environment variables - bypassing dotenv and setting directly

process.env.MONGODB_URI = "mongodb+srv://atlas-sample-dataset-load-67f41fa600e9d136dad7060b:N1ylCQW2YTZjwthy@artify.cytaw4a.mongodb.net/?retryWrites=true&w=majority&appName=Artify";

const app = express();

console.log("MongoDB URI:", process.env.MONGODB_URI); // Check if URI is being read
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/art', artRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => { 
        console.log('MongoDB connected');
    })
    .catch(err => console.error('MongoDB connection error:', err));

// Hello
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
