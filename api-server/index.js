const Express = require("express");
const cors = require("cors");

const { createGraphQLServer } = require("./graphql");
const database = require("./db");

const express = new Express();

// Connect to database
database.connect();

// BodyParser
express.use(Express.json());
express.use(Express.urlencoded({ extended: false }));

// Cors
const corsOption = { origin: "http://localhost:3000", credentials: true };
express.use(cors(corsOption));

// Add GraphQL Server
const graphQLServer = createGraphQLServer();
graphQLServer.applyMiddleware({ app: express, cors: corsOption });

express.listen(3030, () => console.log(`REST API server is open!`));
