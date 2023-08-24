var express = require("express");
var router = express.Router();

/* GET users listing. */
// localhost:3000/books
router.get("/", function (req, res, next) {
  res.send("booklist");
});
// localhost:3000/books/add
router.post("/add", function (req, res, next) {
  res.send("respond with a addbook");
});
// localhost:3000/books/edit
router.put("/edit", function (req, res, next) {
  res.send("respond with a editbook");
});
// localhost:3000/books/delete
router.delete("/delete", function (req, res, next) {
  res.send("respond with a deletebook");
});

module.exports = router;
