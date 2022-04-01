const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const connection = new Sequelize(
  process.env.HEROKU_NAME_DB,
  process.env.HEROKU_USER,
  process.env.HEROKU_PASS,
  {
    host: process.env.HEROKU_HOST,
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
