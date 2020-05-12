module.exports = (sequelize) => {
  const EvolutionRelation = sequelize.define(
    "evolution_relation",
    {},
    {
      timestamps: false,
      paranoid: true,
      underscored: true,
    }
  );

  return EvolutionRelation;
};
