const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
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

module.exports = mongoose.model("client", clientSchema);
