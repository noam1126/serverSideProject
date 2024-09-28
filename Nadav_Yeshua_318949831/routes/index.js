//Nadav Yeshua 318949831
//Noam Nachshon 322315086
//Shaylee Nahum 322714486

var express = require("express");
var router = express.Router();

//get the home page
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Node.js Project Nadav Yeshua, Noam Nachshon and Shay lee Nahum",
  });
});

module.exports = router;
