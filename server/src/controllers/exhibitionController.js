const Exhibition = require('../models/exhibitionModel');

// Controller function to get all exhibitions
exports.getAllExhibitions = async (req, res) => {
  try {
    const exhibitions = await Exhibition.find();
    res.status(200).json(exhibitions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get a specific exhibition by ID
exports.getExhibitionById = async (req, res) => {
  try {
    const exhibition = await Exhibition.findById(req.params.id);
    if (!exhibition) {
      return res.status(404).json({ message: 'Exhibition not found' });
    }
    res.status(200).json(exhibition);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to create a new exhibition
exports.createExhibition = async (req, res) => {
  const exhibition = new Exhibition(req.body);
  try {
    const newExhibition = await exhibition.save();
    res.status(201).json(newExhibition);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to update an existing exhibition
exports.updateExhibition = async (req, res) => {
  try {
    const updatedExhibition = await Exhibition.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedExhibition) {
      return res.status(404).json({ message: 'Exhibition not found' });
    }
    res.status(200).json(updatedExhibition);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to delete an exhibition
exports.deleteExhibition = async (req, res) => {
  try {
    const deletedExhibition = await Exhibition.findByIdAndDelete(req.params.id);
    if (!deletedExhibition) {
      return res.status(404).json({ message: 'Exhibition not found' });
    }
    res.status(200).json({ message: 'Exhibition deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
