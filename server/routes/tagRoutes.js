const express = require("express");
const authController = require("./../controllers/authController");
const newsController = require("./../controllers/newsController");
const router = express.Router();

router
  .route("/")
  .get(newsController.getAllTag)
  .post(
    authController.protect,
    authController.restrictTo("editor", "admin"),
    newsController.createTag
  );

router
  .route("/:id")
  .get(newsController.getTag)
  .patch(
    authController.protect,
    authController.restrictTo("editor", "admin"),
    newsController.updateTag
  )
  .delete(
    authController.protect,
    authController.restrictTo("editor", "admin"),
    newsController.deleteTag
  );
module.exports = router;
