const Express = require("express");
const { createGraphQLServer } = require("./graphql");
const database = require("./db");

const express = new Express();

// Connect to database
database.connect();

// BodyParser
express.use(Express.json());
express.use(Express.urlencoded({ extended: false }));

// Add GraphQL Server
const graphQLServer = createGraphQLServer();
graphQLServer.applyMiddleware({ app: express });

express.listen(3030, () => console.log(`REST API server is open!`));
