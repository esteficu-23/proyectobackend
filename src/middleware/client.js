const { Client } = require("../models/client");
const validarId = async (req, res, next) => {
  const client = await Client.findById(req.params.id);
  if (client !== null) {
    next();
  } else {
    res.status(400).json({ message: "El ID ingresado es incorrecto" });
  }
};

module.exports = { validarId };
