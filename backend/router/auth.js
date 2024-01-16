const express = require("express");
const router = express.Router();

require("../db");
const User = require("../model/universalSchema");

router.get("/", (req, res) => {
  res.send("Hello from the router");
});

router.get("/getdata", (req, res) => {
  User.findOne({ email: "public@database.com" }).then((data) => {
    if (data) {
      res.send(data);
    }
  });
});

router.post("/register", (req, res) => {
  const { email, rollNumber, password } = req.body;

  //* Do the Validation of the form.

  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        return res.status(422).json({
          error: "Email already exisist",
        });
      }

      const Newuser = new User({
        email,
        rollNumber,
        password,
      });

      Newuser.save()
        .then(() => {
          res.status(201).json({
            message: "user regestration succesful",
          });
        })
        .catch((err) =>
          res.status(500).json({ error: "failed to register the user" })
        );
    })
    .catch((err) => console.log(err));

  //   res.send();
});

router.get("/about", (req, res) => {
  res.send("About world");
});

module.exports = router;
