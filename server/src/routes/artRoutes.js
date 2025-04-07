const express = require('express');
const router = express.Router();
const artController = require('../controllers/artController');

// Route to get all artworks
router.get('/artworks', artController.getAllArtworks);

// Route to get a specific artwork by ID
router.get('/artworks/:id', artController.getArtworkById);

// Route to create a new artwork
router.post('/artworks', artController.createArtwork);

// Route to update an existing artwork
router.put('/artworks/:id', artController.updateArtwork);

// Route to delete an artwork
router.delete('/artworks/:id', artController.deleteArtwork);

module.exports = router;