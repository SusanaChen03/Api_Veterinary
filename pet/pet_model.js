const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../config/db_sequelize.js");

const Pet = connection.define("Pet", {
  name: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  idUser: {
    type: DataTypes.INTEGER,
  },
  allergies: {
    type: DataTypes.STRING,
  },
  species:{
    type: DataTypes.STRING,
  }
});

console.log(Pet === connection.models.Pet); // true

try {
  Pet.sync();
} catch (e) {
  console.log(" this is the error" + e );
}

module.exports = Pet;
