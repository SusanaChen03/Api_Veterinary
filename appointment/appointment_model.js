const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../config/db_sequelize.js");

const Appointment = connection.define("Appointment", {
  idPet: {
    type: DataTypes.INTEGER,
  },
  professional: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATE,
  },
  treatment: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
    defaultValue: 'Pending',
  },
});

console.log(Appointment === connection.models.Appointment); // true
///asdfsfaafdf
try {
  Appointment.sync();
} catch (e) {
  console.log(" the error is" + e);
}

module.exports = Appointment;
