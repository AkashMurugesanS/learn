const express = require("express")
const router = express.Router()

const studentController = require('../controller/studentController.js')

router.post("/createStudentapi",studentController.createStudent)


module.exports = router