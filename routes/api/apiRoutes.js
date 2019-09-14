const axios = require("axios");
const router = require("express").Router();

//change URL to google books search, does it take params?
router.get("/recipes", (req, res) => {
  axios
    .get("http://www.recipepuppy.com/api/", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;

// https://www.googleapis.com/books/v1/volumes?q=moby
// https://books.google.com/books?id=a6aaKXJTeaMC&dq=title:moby+dick&hl=&source=gbs_api
