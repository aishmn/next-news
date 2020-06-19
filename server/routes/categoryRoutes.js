const express = require("express");
const authController = require("./../controllers/authController");
const newsController = require("./../controllers/newsController");
const router = express.Router();

router
  .route("/")
  .get(newsController.getAllCategory)
  .post(
    authController.protect,
    authController.restrictTo("editor", "admin"),
    newsController.createCategory
  );

router
  .route("/:id")
  .get(newsController.getCategory)
  .patch(
    authController.protect,
    authController.restrictTo("editor", "admin"),
    newsController.updateCategory
  )
  .delete(
    authController.protect,
    authController.restrictTo("editor", "admin"),
    newsController.deleteCategory
  );

module.exports = router;
