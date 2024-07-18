const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  language: { type: String, required: true },
  chapter: { type: String, required: true },
  lesson: { type: String, required: true },
  score: { type: Number, required: true },
  completed: { type: Boolean, required: true },
});

module.exports = mongoose.model('Progress', progressSchema);
