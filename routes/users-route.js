const express = require("express")
const router = express.Router()
const {getUsers, } = require("../controllers/users-controllers")

router.get("/", getUsers)

module.exports = router;