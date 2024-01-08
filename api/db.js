const mongoose = require("mongoose");
const DBConnection = process.env.MONG_URL;

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
