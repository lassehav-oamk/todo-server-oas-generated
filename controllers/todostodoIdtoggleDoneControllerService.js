'use strict';
const todoData = require('../dataStore');

module.exports.isDoneToggle = function isDoneToggle(req, res, next) {
  todoData.toggleDone(req.todoId.value)
  res.sendStatus(200);
};