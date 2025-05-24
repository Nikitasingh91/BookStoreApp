const mongoose = require("mongoose")
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        requie: true,

    },
    price: {
        type: Number,
        required: true,

    }

})
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;