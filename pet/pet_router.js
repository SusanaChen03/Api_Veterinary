const sequelize = require("sequelize");
const express = require("express");
const router = express.Router();
const controller = require("./pet_controller.js");
const verification = require("../config/middlewares.js");

router.get("/", verification(), controller.infoPet);
router.post("/", verification(), controller.createPet);
router.patch("/:id", verification(), controller.modifyPet);
router.delete("/", verification("admin"), controller.deletePet);

module.exports = router;
