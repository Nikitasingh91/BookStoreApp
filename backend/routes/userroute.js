const express = require("express")
const { signup, login } = require("../controller/usercontroller")

const userrouter = express.Router();
userrouter.post("/signup", signup)
userrouter.post("/login", login)
module.exports = userrouter