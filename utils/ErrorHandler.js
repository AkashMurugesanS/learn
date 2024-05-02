class ErrorHandler extends Error {
    constructor(message, statusCode, successStatus, data, otherData) {
      super(message);
      this.statusCode = statusCode;
      this.successStatus = successStatus;
      this.data = data;
      this.otherData = otherData;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = ErrorHandler;
  