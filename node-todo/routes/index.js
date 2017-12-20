var express = require('express');
var router = express.Router();

var ctrlTodos = require('../controllers/todo.controllers.js');

// Todo routes
router
  .route('/todos')
  .get(ctrlTodos.todosGetAll)
  .post(ctrlTodos.todosAddOne);

router
  .route('/todos/:todoId')
  .get(ctrlTodos.todosGetOne)
  .put(ctrlTodos.todosUpdateOne)
  .delete(ctrlTodos.todosDeleteOne);

module.exports = router;