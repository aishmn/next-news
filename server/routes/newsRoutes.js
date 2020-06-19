const express = require("express");
const authController = require("./../controllers/authController");
const newsController = require("./../controllers/newsController");
const router = express.Router();

router
  .route("/")
  .get(newsController.getAllNews)
  .post(
    authController.protect,
    authController.restrictTo("editor", "admin"),
    newsController.createNews
  );
router
  .route("/:id")
  .get(newsController.getIdBySlug, newsController.getNews)
  .patch(
    authController.protect,
    authController.restrictTo("editor", "admin"),
    newsController.updateNews
  )
  .delete(
    authController.protect,
    authController.restrictTo("editor", "admin"),
    newsController.deleteNews
  );

module.exports = router;
