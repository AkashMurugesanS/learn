const express = require("express");
const app = express();
var cors = require("cors");
const path = require("path");
const morgan = require("morgan");
// const cookieParser = require("cookie-parser");
const ErrorHandler = require("./middleware/error");
const dbConnect = require("./middleware/dbConnect.js");
require("dotenv").config();
//git check

//Routes start
const studentRoute = require("./routes/studentRoute.js");
// Routes end

dbConnect.conn;

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
// app.use(credentials);

// Cross Origin Resource Sharing
// app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
// app.use(cookieParser());

app.use(morgan("dev"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("views", "./views");
app.set("view engine", "ejs");

// Set up session middleware

// This is the basic express session({..}) initialization.
// app.use(passport.initialize());
// init passport on every route call.
// app.use(passport.session());
// allow passport to use "express-session".

// Apply strategy to passport

// passport.use("jwt", jwtStrategy);

//  applyPassportStrategy(passport)
// applyPassportStrategy(passport, "fpjfij");
// googlePassport(passport);
// start
app.use("/api/student", studentRoute);

// end

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/", function (req, res) {
  res.status = 200;
  res.json({ status: "wecome" });
});

//its for error handling new
app.use(ErrorHandler);



module.exports = app;
