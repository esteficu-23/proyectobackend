const { Client } = require("../models/client");
const { validationResult } = require("express-validator");
// const axios = require("axios");

const crearCliente = async (req, res) => {
  try {
    const error = validationResult(req);
    if (error.isEmpty()) {
      const client = new Client(req.body);
      await client.save();
      res.status(200).json({ client });
    } else {
      res.status(500).json(error);
    }
  } catch (error) {
    console.log({ message: error });
  }
};

const obtenerClientes = (req, res) => {
  Client.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const obtenerCliente = (req, res) => {
  const { id } = req.params;
  Client.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const actualizarCliente = async (req, res) => {
  try {
    const error = validationResult(req);
    if (error.isEmpty()) {
      await Client.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ message: "El cliente ha sido actualizado" });
    } else {
      res.status(500).json({ message: error });
    }
  } catch (error) {
    res.json({ message: error });
  }
};

const eliminarCliente = async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);
    res.json({ message: "El cliente ha sido eliminado", client });
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  crearCliente,
  obtenerClientes,
  obtenerCliente,
  actualizarCliente,
  eliminarCliente,
};
