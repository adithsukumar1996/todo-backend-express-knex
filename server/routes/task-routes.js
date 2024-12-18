const { method } = require("lodash");
const addErrorReporting = require("../helpers/utils");
const baseRoutesCreator = require("./base-routes");
const taskRoutes = baseRoutesCreator("tasks");
const taskRepository = require("../database/tasks-repository");
const getEnrichedTasks = async (req, res) => {
  const enrichedTasks = await taskRepository.getEnrichedTasks();
  return res.send(enrichedTasks);
};

const toExport = {
  getAllTasks: {
    method: taskRoutes.getAll,
    errorMessage: "Could not fetch all tasks",
  },
  getTask: { method: taskRoutes.getById, errorMessage: "Could not fetch task" },
  postTask: { method: taskRoutes.post, errorMessage: "Could not post task" },
  patchTask: { method: taskRoutes.patch, errorMessage: "Could not patch task" },
  deleteAllTasks: {
    method: taskRoutes.deleteAll,
    errorMessage: "Could not delete all tasks",
  },
  deleteTask: {
    method: taskRoutes.remove,
    errorMessage: "Could not delete task",
  },
  getEnrichedTasks: {
    method: getEnrichedTasks,
    errorMessage: "Could not get enriched tasks",
  },
};

for (let route in toExport) {
  toExport[route] = addErrorReporting(
    toExport[route].method,
    toExport[route].errorMessage
  );
}

module.exports = toExport;
