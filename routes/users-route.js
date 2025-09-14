const express = require("express")
const router = express.Router()
const {getUsers, getUser, createUser, updateUser, deleteUser } = require("../controllers/users-controllers")

const auth = require("../middlewares/auth")
const roleMiddleware = require("../middlewares/role-middleware")

router.use(auth)

router.get("/", getUsers)
router.get("/:id", getUser)

router.post("/",roleMiddleware("admin"), createUser)
router.put("/:id",roleMiddleware("admin"), updateUser)

router.delete("/:id",roleMiddleware("admin"), deleteUser)

module.exports = router;