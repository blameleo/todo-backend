const express = require("express");
const { createTodo, editTodo, deleteTodo, getTodos, toggleCompleteTodo } = require("../controllers/todoController");

//inituate the express router
const router = express.Router();

//creating the secondary route with the controller callback
router.post("/create", createTodo);
router.put("/edit", editTodo);
router.put("/complete/:id", toggleCompleteTodo);
router.delete("/delete/:id", deleteTodo);
router.get("/todos", getTodos);

module.exports = { todoRouter: router };
