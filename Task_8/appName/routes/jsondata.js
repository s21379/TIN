// JavaScript source code
var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
    console.log(req.body);
       
    res.render("jsondata", {
        first: req.body.firstNumber,
        second: req.body.secondNumber,
        third: req.body.thidNumber,
    });
     
});

module.exports = router;