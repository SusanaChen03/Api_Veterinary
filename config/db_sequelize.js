const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const connection = new Sequelize(
  process.env.NAME_DB,
  process.env.USER_DB,
  process.env.PASS_DB,
  {
    host: process.env.HOST_DB,
    dialect: "mysql",
  }
);

const goRunning = async () => {
  try {
    await connection.authenticate();
    console.log("Connection ok 👌");
  } catch (error) {
    console.error("Not connected:", error);
  }
};

goRunning();

module.exports = connection;
