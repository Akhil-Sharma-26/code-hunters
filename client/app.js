const express = require("express");
const app = express();

// ! MiddleWare

const middleWare = (req, res, next) => {
  console.log("Hello it's MiddleWare");
  next();
};

app.get("/", (req, res) => {
  res.send(`${all}`);
});

app.get("/about", middleWare, (req, res) => {
  res.send("About world");
});

app.listen(8000, () => {
  console.log("Listening");
});

console.log("Hi");
