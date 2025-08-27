const Todo = require("../models/Todos-model");

const getTodos = async (req, res) => {
  try {
    const todo = await Todo.find({});
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found!" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTodos = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndUpdate(id, req.body);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found!" });
    }

    const updatedTodo = await Todo.findById(id);
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found!" });
    }

    res.status(200).json({ message: "Todo deleted succesfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTodos,
  getTodo,
  createTodos,
  updateTodos,
  deleteTodos,
};
