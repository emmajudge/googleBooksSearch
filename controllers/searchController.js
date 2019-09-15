/* call external applicationCache. put res in .then and return back only when there is a match ()

do a comparison when there is a match. filter 
test conditions:
1. blanks
2. do a filter so google search title does not match any title in saved book
*/
const db = require("../models");
const axios = require("axios");
// const router = require("express").Router();

//change URL to google books search, does it take params?
router.get("/search", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

// module.exports = router;

// https://www.googleapis.com/books/v1/volumes?q=moby
// https://books.google.com/books?id=a6aaKXJTeaMC&dq=title:moby+dick&hl=&source=gbs_api

module.exports = {
    findAll: function(req, res) {
      db.Search
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};
