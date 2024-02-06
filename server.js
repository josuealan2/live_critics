const mongoose = require('mongoose');

// Provide the actual values for host, port, and database
const host = '127.0.0.1'; // This can be the IP address or hostname where MongoDB is running
const port = 27017; // The MongoDB port, usually 27017
const database = 'SkillSync';

// Create the MongoDB connection string without username and password
const mongoURI = `mongodb://${host}:${port}/${database}`;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Handle close
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed due to app termination');
    process.exit(0);
  });
});

module.exports = mongoose;


