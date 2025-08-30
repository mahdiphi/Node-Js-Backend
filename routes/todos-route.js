const express = require("express")
const router = express.Router()
const {getTodos, createTodos, updateTodos, deleteTodos, getTodo} = require("../controllers/todos-controller")
const auth = require("../middlewares/auth")

router.use(auth)

router.get("/", getTodos)
router.get("/:id", getTodo)

router.post("/", createTodos)

router.put("/:id", updateTodos)

router.delete("/:id", deleteTodos)

module.exports = router;