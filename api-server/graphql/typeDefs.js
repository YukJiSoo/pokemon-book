const { gql } = require("apollo-server-express");

module.exports = gql`
  type Query {
    pokemons: [Pokemon]
    pokemon(pokemonId: ID): Pokemon
  }

  type Mutation {
    releasePokemon(pokemonId: ID): Pokemon
  }

  type Trainer {
    id: ID!
    name: String
    pokemons: [Pokemon]
  }

  type Pokemon {
    id: ID!
    name: String
    weight: Int
    height: Int
    desc: String
    image: String
    evolvesFrom: Pokemon
    evolvesTo: Pokemon
  }
`;
