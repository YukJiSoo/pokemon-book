import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { QUERY } from "../graphql/pokemon";

import PokemonCard from "../component/PokemonCard";

const PokemonBook = () => {
  const { data } = useQuery(QUERY.GET_POKEMONS);

  if (!data) return null;
  return data.pokemons.map((pokemon) => <PokemonCard key={pokemon.name} {...pokemon} />);
};

export default PokemonBook;
