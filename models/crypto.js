const mongoose = require("mongoose");

// Schema
const postSchema = mongoose.Schema({
  name: String,
  ticker: String,
  price: Number,
});

// Model (Collection)
const PostCrypto = mongoose.model("PostCrypto", postSchema);

module.exports = PostCrypto;
