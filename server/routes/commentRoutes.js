const express = require("express");
const authController = require("./../controllers/authController");
const newsController = require("./../controllers/newsController");
const router = express.Router();

router
  .route("/")
  .get(newsController.getAllComment)
  .post(newsController.createComment);

router
  .route("/:id")
  .get(newsController.getComment)
  .patch(
    authController.protect,
    authController.restrictTo("editor", "admin"),
    newsController.updateComment
  )
  .delete(
    authController.protect,
    authController.restrictTo("editor", "admin"),
    newsController.deleteComment
  );

module.exports = router;
