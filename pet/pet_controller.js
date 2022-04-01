const Pet = require("./pet_model.js");
const Users = require("../user/user_model.js");
require("../config/relations.js");

module.exports.infoPet = async (req, res) => {
  try {
    const list = await Pet.findAll({
      include: [{ model: Users }],
      where: {
        idUser: req.query.idUser,
      },
    });
    res.json(list);
  } catch (error) {
    console.log("error from cach" + error);
    res.json(error);
  }
};

module.exports.createPet = async (req, res) => {
  try {
    const newPet = {
      name: req.body.name,
      age: req.body.age,
      idUser: req.body.idUser,
      allergies: req.body.allergies,
      species: req.body.species,
    };

    const createdPet = await Pet.create(newPet);
    res.status(201).json(createdPet);
  } catch (error) {
    res.json(error);
  }
};

module.exports.modifyPet = async (req, res) => {
  try {
    await Pet.update(req.body, { where: { id: req.params.id } });
    res.json("Pet Modificated");
  } catch (error) {
    res.json(error);
  }
};

module.exports.deletePet = async (req, res) => {
  try {
    await Pet.destroy({ where: { id: req.body.id } });
    res.json("Pet deleted");
  } catch (error) {
    res.json(error);
  }
};
