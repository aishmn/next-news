const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema({
  news: {
    type: mongoose.Schema.ObjectId,
    ref: "News",
    required: [true, "Comment must belong to the news"],
  },
  name: { type: String },
  email: { type: String },
  body: { type: String },
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
