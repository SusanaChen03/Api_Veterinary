const express = require("express");
const app = express();
const usRouter = require("./user/user_routes.js");
const dotenv = require("dotenv");
const peRouter = require("./pet/pet_router.js");
const appointmentRouter = require("./appointment/appointment_router.js");
const  cors = require('cors');

dotenv.config();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => console.log("servidor levantado"));

app.use("/pet", peRouter);
app.use("/user", usRouter);
app.use("/appointment", appointmentRouter);
