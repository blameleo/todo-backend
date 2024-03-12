const TodoModel = require("../models/todos");

const createTodo = async (req, res) => {
  try {
    const todo = await TodoModel.create(req.body);
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json(err);
  }
};

const editTodo = async (req, res) => {

  try {
    const todo = await TodoModel.updateOne(req.id, req.body);
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json(err);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo = await TodoModel.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "todo deleted successfully"});
  } catch (err) {
    res.status(400).json(err);
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(400).json(err);
  }
}

const toggleCompleteTodo = async (req, res) => {
  try {
    console.log(req.body);
    
    const todo = await TodoModel.findByIdAndUpdate(req.params.id, {completed:!req.body.completed});
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  createTodo,
  editTodo,
  deleteTodo,
  getTodos,
  toggleCompleteTodo
};
