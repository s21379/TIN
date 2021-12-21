// JavaScript source code
var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.render("form");
});

router.post("/", function (req, res)  {
    console.log(req.body);
    res.render("formdata", {
        first: req.body.first,
        second: req.body.second,
        third: req.body.third,
    });
});

module.exports = router;
