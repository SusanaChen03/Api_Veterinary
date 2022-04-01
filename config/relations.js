const Users = require("../user/user_model.js");
const Pet = require("../pet/pet_model.js");
const Appointment = require("../appointment/appointment_model.js");

Pet.belongsTo(Users, { foreignKey: "idUser" });

Pet.hasMany(Appointment, { foreignKey: "idPet" });
Appointment.belongsTo(Pet, { foreignKey: "idPet" });

module.exports.Relaciones = { Users, Pet, Appointment };
