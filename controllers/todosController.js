'use strict'

var vartodosController = require('./todosControllerService');

module.exports.todosGet = function todosGet(req, res, next) {
  vartodosController.todosGet(req.swagger.params, res, next);
};

module.exports.todosPost = function todosPost(req, res, next) {
  vartodosController.todosPost(req.swagger.params, res, next);
};