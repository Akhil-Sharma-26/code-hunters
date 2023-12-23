const express = require("express");
const app = express();
const mongoose = require("mongoose");

// ! MiddleWare

const DBConnection = "";
mongoose
  .connect(DBConnection, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(`Failed to connect to DB. Error: ${err}`));

const middleWare = (req, res, next) => {
  console.log("Hello it's MiddleWare");
  next();
};

app.get("/", (req, res) => {
  res.send(`Hi, this is Home Page.`);
});

app.get("/about", middleWare, (req, res) => {
  res.send("About world");
});

app.listen(8000, () => {
  console.log("Listening...");
});

console.log("Server Started.");
