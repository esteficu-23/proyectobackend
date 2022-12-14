const express = require("express");
require("dotenv").config();
const app = express();
const clientRoutes = require("./routes/client");
const incomeRoutes = require("./routes/income");
const axiosRoutes = require("./routes/axios");

//Connection
const port = process.env.PORT || 9000;
const { connect } = require("../db/db");
app.listen(9000, () => console.log(`Server listening on port ${port}`));
connect();

//Middleware
app.use(express.json());
app.use("/client", clientRoutes);
app.use("/api", incomeRoutes);

//Axios
app.use("/axios", axiosRoutes);

//Router
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

module.exports = app;
