const addErrorReporting = require("../helpers/utils");
const baseRoutesCreator = require("./base-routes");
const userRoutes = baseRoutesCreator("users");

const toExport = {
  getAllUsers: {
    method: userRoutes.getAll,
    errorMessage: "Could not fetch all users",
  },
  getUser: { method: userRoutes.getById, errorMessage: "Could not fetch user" },
  postUser: { method: userRoutes.post, errorMessage: "Could not post user" },
  patchUser: { method: userRoutes.patch, errorMessage: "Could not patch user" },
  deleteAllUsers: {
    method: userRoutes.deleteAll,
    errorMessage: "Could not delete all users",
  },
  deleteUser: {
    method: userRoutes.remove,
    errorMessage: "Could not delete user",
  },
};

for (let route in toExport) {
  toExport[route] = addErrorReporting(
    toExport[route].method,
    toExport[route].errorMessage
  );
}

module.exports = toExport;
