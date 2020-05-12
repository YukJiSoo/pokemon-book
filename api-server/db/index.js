const Sequelize = require("sequelize");

const Trainer = require("./models/Trainer");
const Pokemon = require("./models/Pokemon");
const PokemonsOwnedByTrainer = require("./models/PokemonsOwnedByTrainer");
const EvolutionRelation = require("./models/EvolutionRelation");

const config = require("./config");

const database = {
  sequelize: null,
  trainer: null,
  pokemon: null,
  pokemonsOwnedByTrainer: null,
  evolutionRelation: null,

  async connect() {
    this.sequelize = new Sequelize(config);

    this.trainer = Trainer(this.sequelize);
    this.pokemon = Pokemon(this.sequelize);
    this.pokemonsOwnedByTrainer = PokemonsOwnedByTrainer(this.sequelize);
    this.evolutionRelation = EvolutionRelation(this.sequelize);

    this.trainer.hasMany(this.pokemonsOwnedByTrainer, {
      foreignKey: "trainer_id",
    });
    this.pokemon.hasMany(this.pokemonsOwnedByTrainer, {
      foreignKey: "pokemon_id",
    });

    this.pokemon.hasMany(this.evolutionRelation, {
      foreignKey: "before_pokemon_id",
    });
    this.pokemon.hasMany(this.evolutionRelation, {
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
