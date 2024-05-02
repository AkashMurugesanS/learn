const mongoose = require("mongoose");
// const { Schema } = mongoose;

const studentSchema =new mongoose.Schema(
  {

    name:{
        type:String
    },
    age:
    {
        type:Number
    },
//     rollNo:
//     {
//         type:Number
//     },
//     regNo:
//     {
//         type:Number
//     },
//    mobileNo:
//    {
//     type:Number
//    },
//    parentName:
//    {
//     type:String
//    },
//    address:
//    {
//     type:String
//    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("students", studentSchema);
