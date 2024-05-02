

const express = require("express")
const router = express.Router()

const homeController = require('../controller/homeController.js')

router.post("/homeapi",homeController.homeCreate)
router.get("/homeapiall",homeController.getAllHome)
router.get("/findonehomebyname/:findName",homeController.findonehomebyname)
router.get("/findonehomebyid/:findid",homeController.findonehomebyid)


module.exports = router