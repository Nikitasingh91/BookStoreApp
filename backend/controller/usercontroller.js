const User = require("../models/usermodel");
const bcrypt = require("bcrypt")
const signup = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email })
    if (user) {
        return res.status(400).json({ message: "user allready exit" })
    }
    const hashpassword = await bcrypt.hash(password, 10)
    const create = new User({ name, email, password: hashpassword })
    await create.save()
    res.status(201).json({
        message: "user created sucssesfully", user: {
            name: create.name,
            email: create.email,
            _id: create._id
        }
    })


}
const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    const isMatch = await bcrypt.compare(password, user.password)
    if (!user || !isMatch) {
        return res.json({ message: "invailid credential" })
    }
    return res.json({
        message: "login success", user: {
            name: user.name,
            email: user.email,
            _id: user._id
        }
    })

}
module.exports = { signup, login }