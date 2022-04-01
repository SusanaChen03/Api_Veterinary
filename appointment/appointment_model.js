const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../config/db_sequelize.js");

const Appointment = connection.define("Appointment", {
  tratamiento: {
    type: DataTypes.STRING,
  },
  fechaDeVisita: {
    type: DataTypes.DATE,
  },
  idPet: {
    type: DataTypes.INTEGER,
  },
});

console.log(Appointment === connection.models.Appointment); // true

try {
  Appointment.sync();
} catch (e) {
  console.log(" the error is" + e);
}

module.exports = Appointment;
