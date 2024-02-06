const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema'); // Your GraphQL schema
const app = express();

// MongoDB connection - this line should stay near the top to connect to the database early on
require('./database'); // Assumes that './database' exports a function that connects to MongoDB

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true, // Enables the GraphiQL tool
}));

// Specify the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
