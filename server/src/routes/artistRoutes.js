const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistController');

// Route to get all artists
router.get('/artists', artistController.getAllArtists);

// Route to get a specific artist by ID
router.get('/artists/:id', artistController.getArtistById);

// Route to create a new artist
router.post('/artists', artistController.createArtist);

// Route to update an existing artist
router.put('/artists/:id', artistController.updateArtist);

// Route to delete an artist
router.delete('/artists/:id', artistController.deleteArtist);

module.exports = router;
