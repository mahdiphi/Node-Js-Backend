const Jwt = require("jsonwebtoken");
const { endsWith } = require("lodash");
require("dotenv").config();

module.exports = async (req, res, next) => {
  const token = req.header("Authorization");
  try {
    if (!token) return res.status(401).json({ message: "Access denied" });

    const decode = Jwt.verify(token, process.env.SECRET_KEY)
    req.user = decode
    next()
  } catch (error) {
    res.status(400).json({ message: "token in invalid!" });
  }
};
