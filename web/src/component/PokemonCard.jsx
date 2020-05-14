import React from "react";
import styled from "styled-components";

const GridCard = styled.article`
  padding: 1vw;

  box-shadow: 3px 1px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #bebebe;

  .pokemon-image {
    width: 18vw;
  }
`;

const PokemonCard = (props) => {
  const { name, desc, weight, height, image } = props;

  return (
    <GridCard>
      <img className="pokemon-image" src={image} alt={name} />
      <h1>{name}</h1>
      <div>키 {height}</div>
      <div>몸무게 {weight}</div>
      <p>{desc}</p>
    </GridCard>
  );
};

export default PokemonCard;
