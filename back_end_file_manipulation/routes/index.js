const apiTasksRoutes = require("./apiTasks");

const constructorMethod = app => {
  app.use("/api/tasks", apiTasksRoutes);

  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;