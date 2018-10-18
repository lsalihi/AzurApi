'use strict';
module.exports = function(app) {
  var todoListController = require('../controllers/todoListController');

  // todoList Routes
  app.route('/tasks')
    .get(todoListController.list_all_tasks)
    .post(todoListController.create_a_task);
};