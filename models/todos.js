const mongoose = require("mongoose");

//NOTE - defining my todo structure here
const TodoSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const TodoModel = mongoose.model("todos", TodoSchema);

module.exports = TodoModel;
