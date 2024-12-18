const knex = require("./connection.js");
export const baseRepository = (tableName) => ({
  all: async () => knex(tableName),

  get: async (id) => {
    const results = await knex(tableName).where({ id });
    return results[0];
  },

  create: async (title, order) => {
    const results = await knex(tableName)
      .insert({ title, order })
      .returning("*");
    return results[0];
  },

  update: async (id, properties) => {
    const results = await knex(tableName)
      .where({ id })
      .update({ ...properties })
      .returning("*");
    return results[0];
  },

  // delete is a reserved keyword
  del: async (id) => {
    const results = await knex(tableName).where({ id }).del().returning("*");
    return results[0];
  },

  clear: async () => {
    return knex(tableName).del().returning("*");
  },
});
