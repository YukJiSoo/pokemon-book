const mock = [{ name: "육지수" }];

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("trainers", mock);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("trainers", null, {});
  },
};
