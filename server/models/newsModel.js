const mongoose = require("mongoose");
const slugify = require("slugify");

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Title is needed for the news"],
  },
  slug: String,
  author: { type: mongoose.Schema.ObjectId, ref: "User" },
  created_at: {
    time: { type: Date, default: Date.now() },
    person: { type: mongoose.Schema.ObjectId, ref: "User" },
    select: false,
  },
  updated_at: [
    {
      time: { type: Date },
      person: { type: mongoose.Schema.ObjectId, ref: "User" },
    },
  ],
  coverImage: {
    type: String,
    default: "newdefault.jpg",
  },
  body: { type: String },
  status: {
    type: String,
    enum: ["published", "pending"],
    default: "pending",
  },
  province: {
    type: String,
    enum: [
      "Province 1",
      "Province 2",
      "Province 3",
      "Province 4",
      "Province 5",
      "Province 6",
      "Province 7",
      "International",
    ],
    default: "",
  },
  category: { type: mongoose.Schema.ObjectId, ref: "Category" },
  tag: [{ type: mongoose.Schema.ObjectId, ref: "Tag" }],
  topic: [{ type: mongoose.Schema.ObjectId, ref: "Topic" }],
});

NewsSchema.index({ slug: 1 });

NewsSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

NewsSchema.pre(/^find/, function (next) {
  this.populate({ path: "category" })
    .populate({ path: "tag" })
    .populate({ path: "topic" })
    .populate({ path: "author" });
  next();
});
const News = mongoose.model("News", NewsSchema);
module.exports = News;
