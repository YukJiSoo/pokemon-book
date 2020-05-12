const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Pokemon = sequelize.define(
    "pokemon",
    {
      name: DataTypes.STRING(15),
      weight: DataTypes.INTEGER,
      height: DataTypes.INTEGER,
      desc: DataTypes.STRING(100),
      image: DataTypes.STRING(200),
    },
    {
      timestamps: false,
      paranoid: true,
      underscored: true,
    }
  );

  return Pokemon;
};
