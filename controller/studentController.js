const studentModel = require('../model/studentModel.js')

exports.createStudent = async (req, res, next) => {
    // console.log("reqqq",req.body)
    let value = req.body
    // let {name,age}= req.body;
    console.log(value)
    try {

        
    //    const newStudent = studentModel.create(req.body)
       const newStudent = studentModel.create(value)
    //    const newStudent =await studentModel.create({
    //     name,
    //     age
    //    })
        res.status(200).json({
            message:"suceess",
            data:newStudent
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }

}