const Appointment = require("./appointment_model.js");
const Pet = require("../pet/pet_model.js");
const connection = require ("../config/db_sequelize.js")
require("../config/relations.js");

const { Sequelize, DataTypes } = require("sequelize");


module.exports.listAppointment= async (req,res) => {

  try {
    const list = await Appointment.findAll({
      where: {
        idPet: req.query.idPet,
      },
    });
    res.json(list);
  } catch (error) {
    res.json(error + "error");
  }
};
/*module.exports.listAppointment = async (req, res) => {
  try {
    const list = await Appointment.findAll({
      include: [{ model: Pet }],
      where: {
        idPet: req.query.idPet,
      },
    });
    res.json(list);
  } catch (error) {
    res.json(error + "error");
  }
};*/

module.exports.filterAppointment = async (req, res) => {
  try {
    
    const list = await Appointment.findAll({
      where: {
        [Sequelize.Op.and]: {
          idPet: req.query.idPet,
          date: { [Sequelize.Op.gte]: new Date() },
        },
      },
    });
    res.json(list);
  } catch (error) {
    console.log(error + "error");
    res.json(error);
  }
};

module.exports.createAppointment = async (req, res) => {
  try {
    const newAppointment = {
      treatment: req.body.treatment,
      date: req.body.date,
      idPet: req.body.idPet,
      professional: req.body.professional,
    };

    const createdAppointment = await Appointment.create(newAppointment);
    res.status(201).json(createdAppointment);
  } catch (error) {
    res.json(error);
  }
};

module.exports.deleteAppointment = async (req, res) => {
  try {
    await Appointment.destroy({ where: { id: req.body.id } });
    res.json("Appointment Deleted");
  } catch (error) {
    res.json(error);
  }
};

module.exports.modifyAppointment = async (req, res) => {
  try {
    await Appointment.update(req.body, { where: { id: req.params.id } });
    res.json("Appointment Updated");
  } catch (error) {
    res.json(error);
  }
};
