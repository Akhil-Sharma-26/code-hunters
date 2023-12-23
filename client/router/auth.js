const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from the router");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

router.get("/about", (req, res) => {
  res.send("About world");
});

module.exports = router;
