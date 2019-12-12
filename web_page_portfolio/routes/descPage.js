const express = require("express");
const router = express.Router();

const data = [
    {
        title: "a",
        description: "b",
        technologies: ["c", "d", "e"],
        link: "f"
    },
    {
        title: "1",
        description: "2",
        technologies: ["3", "4", "5"],
        link: "6"
    },
    {
        title: "gg",
        description: "wp",
        technologies: ["I", "AM", "DONE"],
        link: "bye"
    }
]

router.get("/", async (req, res) => {
    res.render("home", {tabTitle: "My Web Page", pageTitle: "Projects", projectList: data});
});

module.exports = router;
