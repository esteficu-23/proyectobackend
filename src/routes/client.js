const express = require("express");
const router = express.Router();
const {
  crearCliente,
  obtenerClientes,
  obtenerCliente,
  actualizarCliente,
  eliminarCliente,
} = require("../controllers/clientController");
const { check } = require("express-validator");
const { validarId } = require("../middleware/client");

//Crear un cliente nuevo -->
router.post(
  "/post",
  [
    //Middleware
    check("name")
      .not()
      .isEmpty()
      .withMessage("Debe colocar el nombre")
      .isLength({ min: 4, max: 40 })
      .withMessage("El nombre ingresado no es valido"),
    check("phone")
      .not()
      .isEmpty()
      .withMessage("Debe colocar el numero de telefono")
      .isNumeric()
      .withMessage("Verifique el numero de telefono ingresado"),
    check("location").not().isEmpty().withMessage("Debe colocar la localidad"),
  ],
  crearCliente
);

//Obtener todos los clientes -->
router.get("/get", obtenerClientes);

//Obtener un clientes -->
router.get("/get/:id([0-9a-fA-F]{24})", validarId, obtenerCliente);

//Actualizar un cliente -->
router.put(
  "/put/:id([0-9a-fA-F]{24})",
  validarId,
  [
    //Middleware
    check("name")
      .not()
      .isEmpty()
      .withMessage("Debe colocar un nombre")
      .isLength({ min: 4, max: 40 })
      .withMessage("El nombre ingresado es invalido"),
    check("phone")
      .not()
      .isEmpty()
      .withMessage("Debe colocar el numero de telefono")
      .isNumeric()
      .withMessage("Verifique el numero de telefono ingresado"),
    check("location").not().isEmpty().withMessage("Debe colocar la localidad"),
  ],
  actualizarCliente
);

//Eliminar un cliente -->
router.delete("/delete/:id([0-9a-fA-F]{24})", validarId, eliminarCliente);

module.exports = router;
