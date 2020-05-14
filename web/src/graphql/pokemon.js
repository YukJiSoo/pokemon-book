import { gql } from "@apollo/client";

export const QUERY = {
  GET_POKEMONS: gql`
    query {
      pokemons {
        id
        name
        image
        desc
        weight
        height
      }
    }
  `,
};
