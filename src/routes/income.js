const express = require("express");
const router = express.Router();
const {
  crearIngreso,
  obtenerIngresos,
  obtenerIngreso,
  actualizarIngreso,
  eliminarIngreso,
} = require("../controllers/incomeController");

const { check } = require("express-validator");
const { validarId } = require("../middleware/income");

//Crear un ingreso nuevo --->
router.post(
  "/income",
  [
    //Middleware
    check("year")
      .not()
      .isEmpty()
      .withMessage("Debe colocar el año")
      .isLength({ max: 4 })
      .withMessage("El año ingresado es incorrecto")
      .isNumeric()
      .withMessage("El año ingresado es incorrecto"),
    check("month")
      .not()
      .isEmpty()
      .withMessage("Debe colocar el mes")
      .isLength({ min: 4, max: 10 })
      .withMessage("El mes ingresado es invalido"),
    check("day")
      .not()
      .isEmpty()
      .withMessage("Debe colocar el dia")
      .isLength({ max: 2 })
      .withMessage("El dia ingresado es invalido")
      .isNumeric()
      .withMessage("El dia ingresado es incorrecto"),
  ],
  crearIngreso
);

//Obtener todos los ingresos --->
router.get("/income", obtenerIngresos);

//Obtener un ingreso --->
router.get("/income/:id([0-9a-fA-F]{24})", validarId, obtenerIngreso);

//Actualizar un ingreso --->
router.put(
  "/income/:id([0-9a-fA-F]{24})",
  validarId,
  [
    //Middleware
    check("year")
      .not()
      .isEmpty()
      .withMessage("Debe colocar el año")
      .isLength({ max: 4 })
      .withMessage("El año ingresado es incorrecto")
      .isNumeric()
      .withMessage("Verifique el año ingresado"),
    check("month")
      .not()
      .isEmpty()
      .withMessage("Debe colocar el mes")
      .isLength({ min: 4, max: 10 })
      .withMessage("El mes ingresado es invalido"),
    check("day")
      .not()
      .isEmpty()
      .isLength({ max: 2 })
      .withMessage("El dia ingresado es invalido")
      .isNumeric()
      .withMessage("Verifique el dia ingresado"),
  ],
  actualizarIngreso
);

//Eliminar un ingreso --->
router.delete("/income/:id", validarId, eliminarIngreso);

module.exports = router;
