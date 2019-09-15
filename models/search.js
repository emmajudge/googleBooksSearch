const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// updated fields, make sure to apply elsewhere as needed
const searchSchema = new Schema({
  title: { type: String, required: true },
  authors: [{ type: String, required: true }],
  description: String,
  image: String,
  link: String,
  date: { type: Date, default: Date.now}
});

const Search = mongoose.model("Search", searchSchema);

module.exports = Search;
