const Book = require("../models/bookmodel")

const getBook = async (req, res) => {
    try {
        const book = await Book.find()
        res.status(200).json(book)


    }
    catch (err) {
        console.log(err);

    }

}
module.exports = { getBook }