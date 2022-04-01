const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../config/db_sequelize.js");

const User = connection.define("Users", {
  name: {
    type: DataTypes.STRING,
  },
  surname: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

console.log(User === connection.models.User); // true

try {
  User.sync();
} catch (e) {
  console.log( + "this is the error" + e );
}

module.exports = User;
