const sequelize = require("sequelize");
const express = require("express");
const router = express.Router();
const controller = require("./user_controller.js");
const verification = require("../config/middlewares.js");

router.post("/admin", verification("admin"), controller.createAdmin);
router.get("/", verification(), controller.getUser);
router.post("/", controller.createUser);
router.post("/login", controller.login);
router.post("/logout", controller.logout);
router.patch("/:id", verification("admin"), controller.modifyUser);
router.delete("/", verification("admin"), controller.deleteUser);

module.exports = router;
