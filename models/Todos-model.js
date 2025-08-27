const mongoose = require("mongoose")

const TodosSchema = mongoose.Schema({
    city: {
        type: String,
        required: [true, "Please enter city name."]
    },
    population:{
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    }
})

const Todo = mongoose.model("Todos", TodosSchema)

module.exports = Todo