const express = require("express");
const router = express.Router();

var zipper = require('zip-local');
const fs = require('fs');

router.get("/zip", async (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  try {
    console.log("hi")
    zipper.sync.zip("..\\web_page_portfolio\\").compress().save("pack.zip");
    res.download("pack.zip")
  } catch (e) {
    res.status(500).json({ error: e })
  }
});

router.post("/update", async (req, res) => {
  const newTaskData = req.body;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  console.log(JSON.parse("[" + Object.keys(newTaskData)[0] + "]"));
  console.log("[" + Object.keys(newTaskData)[0] + "]")

  var fd = fs.openSync('..\\web_page_portfolio\\routes\\data.js', 'w+');
  var buffer = new Buffer("module.exports = {data: [" + Object.keys(newTaskData)[0] + "]}")

  fs.writeSync(fd, buffer, 0, buffer.length, 0); //write new data

  fs.close(fd);

  try {
    res.status(200).json({});
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;
