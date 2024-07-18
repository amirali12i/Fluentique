const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // Store hashed passwords only
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

// models/Progress.js
const ProgressSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  language: String,
  levels: [
    {
      levelId: String,
      lessonsCompleted: [String],
      points: Number,
      badges: [String],
    },
  ],
});

const Progress = mongoose.model('Progress', ProgressSchema);

module.exports = Progress;

// models/Badge.js
const BadgeSchema = new mongoose.Schema({
  badgeId: String,
  name: String,
  criteria: String,
  image: String,
});

const Badge = mongoose.model('Badge', BadgeSchema);

module.exports = Badge;
