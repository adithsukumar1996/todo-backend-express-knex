const app = require("./server-config.js");
const userRoutes = require("./routes/user-routes.js");
const taskRoutes = require("./routes/task-routes.js");

const port = process.env.PORT || 5000;

//Users
app.get("/tasks", taskRoutes.getAllTasks);
app.get("/tasks/:id", taskRoutes.getTask);

app.post("/tasks", taskRoutes.postTask);
app.patch("/tasks/:id", taskRoutes.patchTask);

app.delete("/tasks", taskRoutes.deleteAllTasks);
app.delete("/tasks/:id", taskRoutes.deleteTask);
app.get("/", taskRoutes.getEnrichedTasks);

//Tasks
app.get("/users", userRoutes.getAllUsers);
app.get("/users/:id", userRoutes.getUser);

app.post("/users", userRoutes.postUser);
app.patch("/users/:id", userRoutes.patchUser);

app.delete("/users", userRoutes.deleteAllUsers);
app.delete("/users/:id", userRoutes.deleteUser);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;
