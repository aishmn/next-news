const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
});

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
