const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  const token = req.header("Authorization");
  try {
    if (!token) return res.status(401).json({ message: "Access denied" });
    const decode = jwt.verify(token, process.env.SECRET_KEY)
    req.userData = decode
    // if(req.userData)
  } catch (error) {
    res.status(400).json({ message: "token is invalid!" });
  }
};
