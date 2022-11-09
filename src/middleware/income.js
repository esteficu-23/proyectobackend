const { Income } = require("../models/income");
const validarId = async (req, res, next) => {
  const income = await Income.findById(req.params.id);
  if (income !== null) {
    next();
  } else {
    res.status(400).json({ message: "El ID ingresado es incorrecto" });
  }
};

module.exports = { validarId };
