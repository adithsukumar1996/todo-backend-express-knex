const baseRepository = require("./base-repository");
const knex = require("./connection.js");

const tasksRepository = baseRepository("tasks");

tasksRepository.getEnrichedTasks = async () =>
  knex("tasks")
    .join("taskStatus", "tasks.statusId", "taskStatus.id")
    .join("users", "tasks.assignee", "users.id")
    .select(
      "tasks.*",
      "taskStatus.status as status",
      "users.fullName as assigneeName"
    );
// Add any custom repository methods here
module.exports = tasksRepository;
