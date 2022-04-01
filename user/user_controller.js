const User = require("./user_model.js");
const jwt = require("jsonwebtoken");


module.exports.getUser = async (req, res) => {
  try {
    const list = await User.findAll({
      where: {
        name: req.query.name,
      },
    });
    res.json(list);
  } catch (error) {
    res.json(error + "error");
  }
};


module.exports.createUser = async (req, res) => {
  try {
    const newUser = {
      name: req.body.name,
      surName: req.body.surName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      password: req.body.password,
      role: "patient",
    };

    const userCreated = await User.create(newUser);
    res.status(201).json(userCreated);
  } catch (error) {
    res.json(error + "error");
  }
};

module.exports.login = async (req, res) => {
  try {
    const findUser = await User.findOne({
      where: { email: req.body.email, password: req.body.password },
    });

    if ( findUser != null) {
      const ficha = jwt.sign(
        { role: findUser.role, id: findUser.id },
        process.env.JWT_KEY
      );

      res.json(ficha);
    } else {
      res.status(401).send("User no founded");
    }
  } catch (error) {
    res.json(error);
  }
};

module.exports.logout = async (req, res) => {
  try {
    const findUser = await User.findOne({
      where: { email: req.body.email, password: req.body.password },
    });

    if (findUser != null) {
      res.json("the session is closed");
    } else {
      res.status(401).send("incorrect User");
    }
  } catch (error) {
    res.json(error + "error");
  }
};


module.exports.modifyUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json("User edited");
  } catch (error) {
    res.json(error + "error");
  }
};


module.exports.deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.json("User deleted");
  } catch (error) {
    res.json(error + "error");
  }
};

module.exports.crearAdmin = async (req, res) => {
  try {
    const nuevoAdmin = {
      name: req.body.name,
      surName: req.body.surName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };

    const adminCreado = await User.create(nuevoAdmin);
    res.status(201).json(adminCreado);
  } catch (error) {
    res.json(error + "error");
  }
};
