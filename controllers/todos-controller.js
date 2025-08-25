let { todos } = require("../data/users-data");

const getTodos = (req, res) => {
  try {
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTodo = (req, res) => {
  try {
    const { id } = req.params;
    let todoId = parseInt(id, 10);

    res.status(200).json(todos[--todoId])
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTodos = async (req, res) => {
  try {
    const newTodos = await todos.push(req.body);
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTodos = (req, res) => {
  try {
    const { id } = req.params;
    const todoId = parseInt(id, 10);
    let { city, population } = req.body;
    todos = todos.map((todo) => {
      return todo.id === todoId
        ? { ...todo, city: city, population: population }
        : todo;
    });

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTodos = (req, res) => {
  try {
    const { id } = req.params;
    const todoId = parseInt(id, 10);

    todos = todos.filter((todo) => todo.id !== todoId);

    res.status(200).json(todos);
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
