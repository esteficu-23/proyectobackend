const express = require("express");
const router = express.Router();
const { climaAxios } = require("../controllers/axiosController");

router.get("/clima", climaAxios);

module.exports = router;
