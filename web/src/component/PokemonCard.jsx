import React from "react";

const PokemonCard = (props) => {
  const { name, desc, weight, height, image } = props;

  return (
    <article>
      <img src={image} alt={name} width={300} />
      <h1>{name}</h1>
      <div>키 {height}</div>
      <div>몸무게 {weight}</div>
      <p>{desc}</p>
    </article>
  );
};

export default PokemonCard;
