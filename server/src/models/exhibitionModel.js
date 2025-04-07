const mongoose = require('mongoose');

const exhibitionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  curatorName: { type: String },
  artists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' }],
  artworks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artwork' }]
});

const Exhibition = mongoose.model('Exhibition', exhibitionSchema);

module.exports = Exhibition;
