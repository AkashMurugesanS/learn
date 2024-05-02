const mongoose = require("mongoose");
// const configfile = require("../config/configFile");

const s = process.env.mongourl ||  "mongodb+srv://bruceleeakash0:vs8CiyzwaeQ6BsF3@cluster0.nx25s8o.mongodb.net/student";

mongoose
  .connect(s, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log(err, "mongodb was not connected");
  });
mongoose.Promise = global.Promise;

const conn = mongoose.connection;

conn.on("error", () => console.error.bind(console, "connection error"));

conn.once("open", () => console.info("Connection to Database is successful"));

module.exports = conn;
