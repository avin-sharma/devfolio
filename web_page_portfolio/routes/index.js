const descPageRoute = require("./descPage");

const constructorMethod = app => {
  app.use("/", descPageRoute);

  app.use("*", (req, res) => {
    res.status(404).json({"404 Error": "Page Not Found"});
  });
};

module.exports = constructorMethod;