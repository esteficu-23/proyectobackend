const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const incomeSchema = new Schema({
  year: {
    type: Number,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  income: {
    type: Number,
    require: false,
  },
});

const Income = mongoose.model("Income", incomeSchema);
module.exports = { Income };
