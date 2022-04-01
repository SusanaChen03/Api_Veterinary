const express = require("express");
const router = express.Router();
const controller = require("./appointment_controller.js");
const verification = require("../config/middlewares.js");

router.get("/list", verification(), controller.listAppointment);
router.get("/", verification(), controller.filterAppointment);
router.post("/", verification(), controller.createAppointment);
router.delete("/", verification(), controller.deleteAppointment);
router.patch("/:id", verification(), controller.modifyAppointment);

module.exports = router;
