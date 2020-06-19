const mongoose = require("mongoose");

const TagSchema = new mongoose.Schema({
  title: { type: String },
});

const Tag = mongoose.model("Tag", TagSchema);
module.exports = Tag;
