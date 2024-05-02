const homeModel = require("../model/homeModel.js");

exports.homeCreate = async (req, res, next) => {
  // const value = req.body
  // console.log(value)

  const { bathroom, homeName } = req.body;

  if (!bathroom) {
    return res.status(400).json({
      message: "plz enter bathroom value",
    });
  }

  try {
    const exists = await homeModel.findOne({ homeName: homeName });
console.log("existsghjkl",exists)
    if (exists) {
      res.status(409).json({
        message: `${homeName} already exists`,
      });
    } else {
      // res.status(200).json({
      //     message:"no problem you can create"
      // })
      const create = await homeModel.create({
        bathroom: bathroom,
        homeName: homeName,
      });

      res.status(200).json({
        message: "succes",
        data: create,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.getAllHome = async (req, res, next) => {

    try {


        const allhome = await homeModel.find({})
        console.log("snssn",allhome)

        if(allhome.length>0){
        res.status(200).json({
            message:"success",
            data:allhome
        })}  

        else{
            res.status(400).json({
                message:"home not exists"
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message,
          });
    }
}

exports.findonehomebyname = async(req,res,next) => {
    let findName = req.params.findName
    console.log("nhbbb", findName)
    try {
        const findone = await homeModel.findOne({
            homeName:findName
        })
        if(findone) {
            res.status(200).json({
                message:"success",
                data:findone
            })
        }

        else{
            res.status(400).json({
                message:"you are given home name is not available"
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message,
          });
        
    }
}

exports.findonehomebyid = async(req,res,next) => {
    let findid = req.params.findid
    console.log("nhbbb", findid)
    try {
        const findone = await homeModel.findOne({
            _id:findid
        })
        if(findone) {
            res.status(200).json({
                message:"success",
                data:findone
            })
        }

        else{
            res.status(400).json({
                message:"you are given home id is not available"
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message,
          });
        
    }
}