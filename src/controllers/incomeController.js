const { Income } = require("../models/income");
const { validationResult } = require("express-validator");

const crearIngreso = async (req, res) => {
  try {
    const err = validationResult(req);
    if (err.isEmpty()) {
      const income = new Income(req.body);
      await income.save();
      res.status(200).json({ income });
    } else {
      res.status(500).json(err);
    }
  } catch (error) {
    console.log({ message: error });
  }
};

const obtenerIngresos = (req, res) => {
  Income.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const obtenerIngreso = (req, res) => {
  const { id } = req.params;
  Income.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const actualizarIngreso = async (req, res) => {
  try {
    const err = validationResult(req);
    if (err.isEmpty()) {
      await Income.findByIdAndUpdate(req.params.id, req.body);
      res
        .status(200)
        .json({ message: "El ingreso ha sido actualizado correctamente" });
    } else {
      res.status(500).json({ message: error });
    }
  } catch (error) {
    res.json({ message: error });
  }
};

const eliminarIngreso = (req, res) => {
  const { id } = req.params;
  Income.findByIdAndDelete({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

module.exports = {
  crearIngreso,
  obtenerIngresos,
  obtenerIngreso,
  actualizarIngreso,
  eliminarIngreso,
};
