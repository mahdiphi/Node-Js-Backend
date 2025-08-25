const {users} = require("../data/users-data")

const getUsers = (req, res) => {
    try {
        res.send(users)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getUsers,

}