const Express = require("express");

const express = new Express();

// BodyParser
express.use(Express.json());
express.use(Express.urlencoded({ extended: false }));

express.listen(3030, () => console.log(`REST API server is open!`));
