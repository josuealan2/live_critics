const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

// Define a simple GraphQL Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        hello: {
            type: GraphQLString,
            resolve(parent, args) {
                return 'Hello World!';
            }
        }
        // Add other queries here
    }
});

// Define a simple GraphQL Mutation (if needed)
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // Define mutations here
    }
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
