const mongoose = require('mongoose');

// Environment variable for database URI
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/SkillSync';

// Options for Mongoose connection
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

mongoose.connect(mongoURI, options)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB connection error:', err));

module.exports = mongoose;

