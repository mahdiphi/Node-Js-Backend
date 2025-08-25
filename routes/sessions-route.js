const express = require("express")
const router = express.Router()
const {getSessions, } = require("../controllers/sessions-controller")

router.get("/", getSessions)

module.exports = router;