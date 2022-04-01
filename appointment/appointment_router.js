const express = require("express");
const router = express.Router();
const controller = require("./appointment_controller.js");
const verification = require("../config/middlewares.js");

router.get("/list", controller.listAppointment);
router.get("/", controller.filterAppointment);
router.post("/", controller.createAppointment);
router.delete("/", controller.deleteAppointment);
router.patch("/:id", controller.modifyAppointment);

module.exports = router;
