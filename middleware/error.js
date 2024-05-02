const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  // console.log("oo", err.code, err.keyValue, err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  //wrong db id error
  if (err.name === "CastError") {
    // console.log(err);
    const message = `Resource not found with this id..Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //duplicate code error

  if (err.code == "11000") {
    const message = `Duplicate ${Object.keys(err.keyValue)} ${Object.values(
      err.keyValue
    )} Entered`;
    err = new ErrorHandler(message, 400);
  }

  //wrong jwt error

  if (err.name == "jsonWebTokenError") {
    const message = `Your url is invalid please try again`;
    err = new ErrorHandler(message, 400);
  }

  //Jwt expired error
  if (err.name == "TokenExpiredError") {
    const message = `Your url is expired please try again`;
    err = new ErrorHandler(message, 400);
  }

  // if (err.code == "11000"
  //     && err.message.includes("email")
  // ) {
  //     // console.log(err.message,err)
  //     const message = `${err.keyValue.email} already exists`
  //     err = new ErrorHandler(message, 400)
  // }
  res.status(err.statusCode).json({
    success: err.successStatus,
    message: err.message,
    data: err.data,
    otherData: err.otherData,
    // message: err.stack
  });
};
