const { gql } = require("apollo-server-express");

module.exports = gql`
  scalar Height
  scalar Weight

  type Query {
    pokemons: [Pokemon]
    pokemon(pokemonId: ID!): Pokemon
    myPokemons(trainerId: ID!): [Pokemon!]
  }

  type Mutation {
    catchPokemon(trainerId: ID!, pokemonId: ID!): ID
    releasePokemon(trainerId: ID!, pokemonId: ID!): Boolean
  }

  type Trainer {
    id: ID!
    name: String
    pokemons: [Pokemon!]!
  }

  type Pokemon implements EvolutionRelation {
    id: ID!
    name: String
    weight: Weight
    height: Height
    desc: String
    image: String
    evolvesFrom: Pokemon
    evolvesTo: Pokemon
  }

  interface EvolutionRelation {
    evolvesFrom: Pokemon
    evolvesTo: Pokemon
  }
`;
