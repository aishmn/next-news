const mongoose = require("mongoose");
const TopicSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
});
const Topic = mongoose.model("Topic", TopicSchema);
module.exports = Topic;
