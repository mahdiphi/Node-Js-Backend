const express = require("express")
const router = express.Router()
const {getUsers, getUser, createUser, updateUser, deleteUser } = require("../controllers/users-controllers")

const auth = require("../middlewares/auth")

router.use(auth)

router.get("/", getUsers)
router.get("/:id", getUser)

router.post("/", createUser)
router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

module.exports = router;