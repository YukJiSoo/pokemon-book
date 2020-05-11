const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

exports.createGraphQLServer = () => {
  return new ApolloServer({
    typeDefs,
    resolvers,
  });
};
