const mock = require("../../mock/evolution.json");

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("evolution_relations", mock);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("evolution_relations", null, {});
  },
};
