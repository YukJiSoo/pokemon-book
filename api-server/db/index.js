const Sequelize = require("sequelize");

const Trainer = require("./models/Trainer");
const Pokemon = require("./models/Pokemon");
const PokemonsOwnedByTrainer = require("./models/PokemonsOwnedByTrainer");
const EvolutionRelation = require("./models/EvolutionRelation");

const config = require("./config");

const database = {
  sequelize: null,
  Trainer: null,
  Pokemon: null,
  PokemonsOwnedByTrainer: null,
  EvolutionRelation: null,

  async connect() {
    this.sequelize = new Sequelize(config);

    this.Trainer = Trainer(this.sequelize);
    this.Pokemon = Pokemon(this.sequelize);
    this.PokemonsOwnedByTrainer = PokemonsOwnedByTrainer(this.sequelize);
    this.EvolutionRelation = EvolutionRelation(this.sequelize);

    this.Trainer.hasMany(this.PokemonsOwnedByTrainer, {
      foreignKey: "trainer_id",
    });
    this.Pokemon.hasMany(this.PokemonsOwnedByTrainer, {
      foreignKey: "pokemon_id",
    });

    this.Pokemon.hasMany(this.EvolutionRelation, {
      foreignKey: "before_pokemon_id",
    });
    this.Pokemon.hasMany(this.EvolutionRelation, {
      foreignKey: "after_pokemon_id",
    });

    this.sequelize
      .authenticate()
      .then(async () => {
        console.log("⭕ Connection has been established successfully.");
        await this.sequelize.sync();
      })
      .catch((err) => {
        console.error("❌ Unable to connect to the database:", err);
      });

    return database;
  },
};

module.exports = database;
