const mock = [
  {
    name: "이상해씨",
    weight: 100,
    height: 25,
    desc: "이상해씨 설명",
    image: "이상해씨 이미지",
  },
];

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("pokemons", mock);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("pokemons", null, {});
  },
};
