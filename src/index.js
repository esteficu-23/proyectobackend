const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const clientRoutes = require("./routes/client");

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use("/api", clientRoutes);

//routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(9000, () => console.log(`Server listening on port ${port}`));
