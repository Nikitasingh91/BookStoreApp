const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require("mongoose");
const router = require("./routes/bookroute");
const userrouter = require("./routes/userroute");
const app = express();
app.use(cors())
dotenv.config()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello")
})
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("data base created");
}).catch((err) => console.log(err));
app.use("/book", router)
app.use("/user", userrouter)
app.listen(process.env.PORT, () => {
    console.log("server created", process.env.PORT);

})