const Art = require('../models/artModel');

// Fetch all artworks
exports.getAllArtworks = async (req, res) => {
    try {
        const artworks = await Art.find();
        res.status(200).json(artworks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching artworks', error });
    }
};

// Create a new artwork
exports.createArtwork = async (req, res) => {
    const newArtwork = new Art(req.body);
    try {
        const savedArtwork = await newArtwork.save();
        res.status(201).json(savedArtwork);
    } catch (error) {
        res.status(400).json({ message: 'Error creating artwork', error });
    }
};

// Update an artwork
exports.updateArtwork = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedArtwork = await Art.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedArtwork) {
            return res.status(404).json({ message: 'Artwork not found' });
        }
        res.status(200).json(updatedArtwork);
    } catch (error) {
        res.status(400).json({ message: 'Error updating artwork', error });
    }
};

// Delete an artwork
exports.deleteArtwork = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedArtwork = await Art.findByIdAndDelete(id);
        if (!deletedArtwork) {
            return res.status(404).json({ message: 'Artwork not found' });
        }
        res.status(200).json({ message: 'Artwork deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting artwork', error });
    }
};