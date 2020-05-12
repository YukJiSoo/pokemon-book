module.exports = (sequelize) => {
  const PokemonsOwnedByTrainer = sequelize.define(
    "pokemons_owned_by_trainer",
    {},
    {
      timestamps: false,
      paranoid: true,
      underscored: true,
    }
  );

  return PokemonsOwnedByTrainer;
};
