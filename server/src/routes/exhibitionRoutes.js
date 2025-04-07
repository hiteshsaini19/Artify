const express = require('express');
const router = express.Router();
const exhibitionController = require('../controllers/exhibitionController');

// Route to get all exhibitions
router.get('/', exhibitionController.getAllExhibitions);

// Route to get a specific exhibition by ID
router.get('/:id', exhibitionController.getExhibitionById);

// Route to create a new exhibition
router.post('/', exhibitionController.createExhibition);

// Route to update an existing exhibition
router.put('/:id', exhibitionController.updateExhibition);

// Route to delete an exhibition
router.delete('/:id', exhibitionController.deleteExhibition);

module.exports = router;
