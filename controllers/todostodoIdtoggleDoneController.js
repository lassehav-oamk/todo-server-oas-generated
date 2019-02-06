'use strict'

var vartodostodoIdtoggleDoneController = require('./todostodoIdtoggleDoneControllerService');

module.exports.isDoneToggle = function isDoneToggle(req, res, next) {
  vartodostodoIdtoggleDoneController.isDoneToggle(req.swagger.params, res, next);
};