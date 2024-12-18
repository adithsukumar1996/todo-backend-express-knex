/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("id");
    table.string("title", 255).notNullable();
    table.string("description", 1024);
    table
      .integer("assignee")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table
      .integer("statusId")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("taskStatus")
      .onDelete("CASCADE");
    table.primary("id");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
