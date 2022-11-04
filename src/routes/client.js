const express = require("express");
const clientSchema = require("../models/client");

const router = express.Router();

//Crear un cliente nuevo
router.post("/client", (req, res) => {
  const client = clientSchema(req.body);
  client
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Obtener todos los clientes
router.get("/client", (req, res) => {
  clientSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Obtener un clientes
router.get("/client/:id", (req, res) => {
  const { id } = req.params;
  clientSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Actualizar un usuario
router.put("/client/:id", (req, res) => {
  const { id } = req.params;
  const { name, phone, location } = req.body;
  clientSchema
    .updateOne({ _id: id }, { $set: { name, phone, location } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Eliminar un cliente
router.delete("/client/:id", (req, res) => {
  const { id } = req.params;
  clientSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
