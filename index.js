require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { todoRouter } = require("./routes/todoRoutes");
const port = 4000;

const app = express();
app.use(express.json());

//NOTE - connection to mongoose server
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("database connection established");
});

//base routes
app.use("/", todoRouter);

//NOTE - this starts the server
app.listen(port, function () {
  console.log("Server running on port " + port);
});

//added