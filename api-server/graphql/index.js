const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const db = require("../db");

const context = () => {
  return { ...db };
};

exports.createGraphQLServer = () => {
  return new ApolloServer({
    typeDefs,
    resolvers,
    context,
  });
};
