const sequelize = require("sequelize");
const express = require("express");
const router = express.Router();
const controller = require("./user_controller.js");
const verification = require("../config/middlewares.js");

router.post("/admin", controller.createAdmin);

router.get("/", controller.getUser);
router.post("/", controller.createUser);
router.post("/login", controller.login);
router.post("/logout", controller.logout);
router.patch("/:id", controller.modifyUser);
router.delete("/", controller.deleteUser);

module.exports = router;
