const sequelize = require("sequelize");
const express = require("express");
const router = express.Router();
const controller = require("./pet_controller.js");
const verification = require("../config/middlewares.js");

router.get("/", controller.infoPet);
router.post("/", controller.createPet);
router.patch("/:id", controller.modifyPet);
router.delete("/", controller.deletePet);

module.exports = router;
