const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name."]
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

UserSchema.methods.checkEmailExist = async function() {
    const user = await mongoose.model("User").findOne({email: this.email})

    if(user){
        return true
    }
    return false
}

UserSchema.pre("save", async function(next) {
    if(!this.isModified('password')) return next()
        const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model("User", UserSchema)

module.exports = User;