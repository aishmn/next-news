const factory = require("./handlerFactory");
const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");
const News = require("../models/newsModel");
const Category = require("../models/categoryModel");
const Comment = require("../models/commentModel");
const Tag = require("../models/tagModel");
const Topic = require("../models/topicModel");
// Category
exports.getCategory = factory.getOne(Category);
exports.getAllCategory = factory.getAll(Category);
exports.createCategory = factory.createOne(Category);
exports.updateCategory = factory.updateOne(Category);
exports.deleteCategory = factory.deleteOne(Category);

// Comment
exports.getComment = factory.getOne(Comment);
exports.getAllComment = factory.getAll(Comment);
exports.createComment = factory.createOne(Comment);
exports.updateComment = factory.updateOne(Comment);
exports.deleteComment = factory.deleteOne(Comment);

// Tag
exports.getTag = factory.getOne(Tag);
exports.getAllTag = factory.getAll(Tag);
exports.createTag = factory.createOne(Tag);
exports.updateTag = factory.updateOne(Tag);
exports.deleteTag = factory.deleteOne(Tag);

// Topic
exports.getTopic = factory.getOne(Topic);
exports.getAllTopic = factory.getAll(Topic);
exports.createTopic = factory.createOne(Topic);
exports.updateTopic = factory.updateOne(Topic);
exports.deleteTopic = factory.deleteOne(Topic);

// News
exports.getNews = factory.getOne(News);
exports.getAllNews = factory.getAll(News);
exports.createNews = factory.createOne(News);
exports.updateNews = factory.updateOne(News);
exports.deleteNews = factory.deleteOne(News);

exports.getIdBySlug = catchAsync(async (req, res, next) => {
  if (req.params.id === null) return next();
  const news = await News.findOne({ slug: req.params.id });
  req.params.id = news._id;
  next();
});
