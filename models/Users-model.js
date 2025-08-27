const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name."]
    },
    age: {
        type: Number,
        required: [true, "Please ennter your age."]
    },
    image: {
        type: String,
        required: false
    }
})

const User = mongoose.model("User", UserSchema)

module.exports = User;