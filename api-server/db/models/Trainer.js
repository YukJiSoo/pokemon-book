const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Trainer = sequelize.define(
    "trainer",
    {
      name: DataTypes.STRING(15),
    },
    {
      timestamps: false,
      paranoid: true,
      underscored: true,
    }
  );

  return Trainer;
};
