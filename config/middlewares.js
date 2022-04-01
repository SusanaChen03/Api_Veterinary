//Importacion de libreria de gestion de token
const jwt = require("jsonwebtoken");
const User = require("../user/user_model.js");


const verification = (comprovationRole = null) => {
  return async (req, res, next) => {
    try {
      const token = jwt.verify(req.headers.token, process.env.JWT_KEY);

      const userPass = await User.findOne({ where: { id: token.id } });
      if (
        (comprovationRole == null || token.role == comprovationRole) &&
        userPass != null
      ) {
        next();
      } else {
        res.status(403).send("you no pass");
      }
    } catch (error) {
      res.status(401).send(error);
    }
  };
};
module.exports = verification;
