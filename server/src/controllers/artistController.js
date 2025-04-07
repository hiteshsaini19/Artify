const Artist = require('../models/artistModel');

// Controller to get all artists
exports.getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.find();
        res.json(artists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get a specific artist by ID
exports.getArtistById = async (req, res) => {
    try {
        const artist = await Artist.findById(req.params.id);
        if (!artist) {
            return res.status(404).json({ message: 'Artist not found' });
        }
        res.json(artist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to create a new artist
exports.createArtist = async (req, res) => {
    const artist = new Artist(req.body);
    try {
        const newArtist = await artist.save();
        res.status(201).json(newArtist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to update an existing artist
exports.updateArtist = async (req, res) => {
    try {
        const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!artist) {
            return res.status(404).json({ message: 'Artist not found' });
        }
        res.json(artist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to delete an artist
exports.deleteArtist = async (req, res) => {
    try {
        const artist = await Artist.findByIdAndDelete(req.params.id);
        if (!artist) {
            return res.status(404).json({ message: 'Artist not found' });
        }
        res.json({ message: 'Artist deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
