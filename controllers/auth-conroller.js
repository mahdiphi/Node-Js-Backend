const Joi = require("joi");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/Users-model")

const signup = async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(55).required().messages({
      "string.min": "Name must be at least 4 charachter",
    }),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(50).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const emailExists = await User.findOne({email: req.body.email})
  if (emailExists) {
    return res.status(400).json({ message: "User is already registered" });
  }
  
  const user = new User(req.body);
  await user.save();
  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
  res
    .header("Authorization", token)
    .status(201)
    .json(_.pick(user, ["_id", "name", "email"]));
};

const login = async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(50).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).json({ message: "Email or password is invalid!" });
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).json({ message: "Email or password is invalid!" });

  const token = jwt.sign({id: user.id}, process.env.SECRET_KEY)
  res.status(200).json(token)
};

module.exports = {
    signup,
    login,
}