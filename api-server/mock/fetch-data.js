const fetch = require("node-fetch");
const fs = require("fs");

const getPokemonsURL = "https://pokeapi.co/api/v2/pokemon";
const getPokemonsDetailURL = (pokemonID) => `https://pokeapi.co/api/v2/pokemon-species/${pokemonID}`;
const getPokemonImageURL = (pokemonID) => `https://pokeres.bastionbot.org/images/pokemon/${pokemonID}.png`;

const request = async (url) =>
  fetch(url)
    .then((res) => res.json())
    .catch(() => {
      throw new Error();
    });

const getPokemonKoNameAndDesc = async (pokemonID) => {
  const res = await request(getPokemonsDetailURL(pokemonID));
  const name = res.names.find(({ language: { name } }) => name === "ko").name;
  const desc = res.flavor_text_entries.find(({ language: { name } }) => name === "ko").flavor_text;

  return [name, desc];
};

const fetchData = async () => {
  const { results: pokemonDatas } = await request(getPokemonsURL);
  const pokemons = await Promise.all(pokemonDatas.map(({ url }) => request(url)));

  // Get pokemons data
  const parsedPokemons = await Promise.all(
    pokemons.map(async ({ id, height, weight }) => {
      const [name, desc] = await getPokemonKoNameAndDesc(id);
      return {
        name,
        height,
        weight,
        desc,
        image: getPokemonImageURL(id),
      };
    })
  );

  // Get pokemons evolution data
  const parsedPokemonEvolutions = await Promise.all(
    pokemons.map(async ({ id }) => {
      const url = getPokemonsDetailURL(id);
      const { evolution_chain, evolves_from_species } = await request(url);

      let after_pokemon_id;
      const { chain } = await request(evolution_chain.url);
      let { evolves_to } = chain;
      while (evolves_to.length) {
        const nextId = evolves_to[0].species.url.split("/")[6];
        if (nextId > id) {
          after_pokemon_id = nextId;
          break;
        }

        evolves_to = evolves_to[0].evolves_to;
      }

      return {
        id,
        before_pokemon_id: evolves_from_species ? evolves_from_species.url.split("/")[6] : undefined,
        after_pokemon_id,
      };
    })
  );

  // TODO. Add to db or make mock data for seed
  fs.writeFile(`${__dirname}/pokemon.json`, JSON.stringify(parsedPokemons, null, 2), (err) => {
    if (err) console.log("pokemon:", err);
  });
  fs.writeFile(`${__dirname}/evolution.json`, JSON.stringify(parsedPokemonEvolutions, null, 2), (err) => {
    if (err) console.log("evolution:", err);
  });
};

(async () => {
  await fetchData();
})();
