const { GraphQLScalarType } = require("graphql");

exports.Height = new GraphQLScalarType({
  name: "Height",
  description: "Height custom scalar type",
  serialize(value) {
    return `${value}cm`;
  },
});

exports.Weight = new GraphQLScalarType({
  name: "Weight",
  description: "Weight custom scalar type",
  serialize(value) {
    return `${value}kg`;
  },
});

exports.Pokemon = {
  evolvesFrom: async ({ id }, _, { Pokemon, EvolutionRelation }) => {
    const { before_pokemon_id: evoliveFromPokemonId } = await EvolutionRelation.findOne({ where: { id } });
    return await Pokemon.findOne({ where: { id: evoliveFromPokemonId } });
  },
  evolvesTo: async ({ id }, _, { Pokemon, EvolutionRelation }) => {
    const { after_pokemon_id: evoliveToPokemonId } = await EvolutionRelation.findOne({ where: { id } });
    return await Pokemon.findOne({ where: { id: evoliveToPokemonId } });
  },
};

exports.Query = {
  pokemons: async (_, __, { Pokemon }) => {
    const result = await Pokemon.findAll();
    return result;
  },
  pokemon: async (_, { pokemonId }, { Pokemon }) => {
    const result = await Pokemon.findOne({ where: { id: pokemonId } });
    return result;
  },
  myPokemons: async (_, { trainerId }, { Pokemon, PokemonsOwnedByTrainer }) => {
    const pokemonIds = await PokemonsOwnedByTrainer.findAll({ where: { trainer_id: trainerId } }).map(
      ({ pokemon_id }) => pokemon_id
    );
    const result = await Pokemon.findAll({ where: { id: pokemonIds } });
    return result;
  },
  trainers: async (_, __, { Trainer }) => {
    const result = await Trainer.findAll();
    return result;
  },
};

exports.Mutation = {
  catchPokemon: async (_, { trainerId, pokemonId }, { PokemonsOwnedByTrainer }) => {
    await PokemonsOwnedByTrainer.create({ trainer_id: trainerId, pokemon_id: pokemonId });
    return pokemonId;
  },
  releasePokemon: async (_, { trainerId, pokemonId }, { PokemonsOwnedByTrainer }) => {
    await PokemonsOwnedByTrainer.destroy({ where: { trainer_id: trainerId, pokemon_id: pokemonId } });
    return true;
  },
};
