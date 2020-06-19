const express = require("express");
const authController = require("./../controllers/authController");
const newsController = require("./../controllers/newsController");
const router = express.Router();

router
  .route("/")
  .get(newsController.getAllTopic)
  .post(
    authController.protect,
    authController.restrictTo("editor", "admin"),
    newsController.createTopic
  );

router
  .route("/:id")
  .get(newsController.getTopic)
  .patch(
    authController.protect,
    authController.restrictTo("editor", "admin"),
    newsController.updateTopic
  )
  .delete(
    authController.protect,
    authController.restrictTo("editor", "admin"),
    newsController.deleteTopic
  );

module.exports = router;
