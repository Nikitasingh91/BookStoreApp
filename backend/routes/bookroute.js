const express = require("express")
const { getBook } = require("../controller/bookcontroller")
const router = express.Router()
router.get("/", getBook)
module.exports = router