var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.json({
        value: eval(
            `${req.query.firstNumber} ${mid(req.query.op)} ${req.query.secondNumber}`),
    });
    
});

const mid = (op) => {
    switch (op) {
        case "plus":
            return "+";
            break;
        case "minus":
            return "-";
            break;
        case "multiply":
            return "*";
            break;
        case "divide":
            return "/";
            break;
        default:
            return "Error";
    }
};


module.exports = router;
