const express = require("express");
const router = express.Router();
const data = require("./data")

router.get("/", async (req, res) => {
    for (var i = 0; i < data.data.length; i++) {
        data.data[i].technologies = Object.values(data.data[i].technologies);
    }
    res.render("home", {tabTitle: "My Web Page", pageTitle: "Projects", projectList: data.data});
});

module.exports = router;
