import React from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";

import { QUERY } from "../graphql/pokemon";

import PokemonCard from "../component/PokemonCard";

const GridLayout = styled.section`
  padding: 12vh 0;

  display: grid;
  grid-template-columns: repeat(4, 20vw);
  grid-column-gap: 4vw;
  grid-row-gap: 4vw;
  margin: 0 4vw;
`;

const ListLayout = styled.section`
  padding-top: 12vh;

  display: grid;
  grid-template-columns: repeat(1, 90vw);
  grid-row-gap: 5vw;
  margin: 0 5vw;
`;

const PokemonBook = () => {
  const { data } = useQuery(QUERY.GET_POKEMONS, { fetchPolicy: "cache-and-network" });

  if (!data) return null;
  return (
    <GridLayout>
      {data.pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} {...pokemon} />
      ))}
    </GridLayout>
  );
};

export default PokemonBook;
