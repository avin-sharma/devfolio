const express = require("express");
const configRoutes = require("./routes");
const exphbs = require("express-handlebars");

const app = express();

const static = express.static(__dirname + "/public");
app.use("/public", static);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

configRoutes(app);

app.listen(3001, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3001");
});
