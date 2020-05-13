const mock = [
  { trainer_id: 1, pokemon_id: 1 },
  { trainer_id: 1, pokemon_id: 4 },
  { trainer_id: 1, pokemon_id: 7 },
  { trainer_id: 1, pokemon_id: 10 },
  { trainer_id: 1, pokemon_id: 15 },
];

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("pokemons_owned_by_trainers", mock);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("pokemons_owned_by_trainers", null, {});
  },
};
