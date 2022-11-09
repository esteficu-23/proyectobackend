////MongoDB connection -->
const mongoose = require("mongoose");
require("dotenv").config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Conectado a MongoDB Atlas");
  } catch (error) {
    console.log("Error al conectarse...");
    console.log(error.message);
  }
};

module.exports = { connect };
