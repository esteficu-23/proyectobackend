const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const clientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
});

const Client = mongoose.model("Client", clientSchema);
module.exports = { Client };
