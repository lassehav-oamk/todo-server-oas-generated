'use strict';
const todoData = require('../dataStore');

module.exports.todosGet = function todosGet(req, res, next) {
  res.send(todoData.getTodos());
};

module.exports.todosPost = function todosPost(req, res, next) {
  const inputData = req.todoObjectCreate.value;
  todoData.addTodo(inputData.description, inputData.dueDate, inputData.type);
  res.sendStatus(201);
};