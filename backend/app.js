const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
// const cors = require("cors");

// ! MiddleWare

dotenv.config({ path: "./.env" });

const DBConnection = process.env.MONG_URL;
const PORT = process.env.PORT || 5000;
require("./db");

// app.use(cors(corsOptions));

app.use(express.json());
// above one to convert the data into the JSON format.
// Linking Router Files
app.use(require("./router/auth"));

app.listen(PORT, () => {
  console.log(`Listening to port:${PORT}...`);
});

console.log("Server Started.");
