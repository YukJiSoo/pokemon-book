const mock = require("../../mock/pokemon.json");

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("pokemons", mock);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("pokemons", null, {});
  },
};
