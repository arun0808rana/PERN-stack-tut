const router = require('express').Router();
const { onGetAllTodos, onCreateNewTodo } = require('../controllers/todo.controller');

router.get('/all', onGetAllTodos);
router.get('/newTodo', onCreateNewTodo);

module.exports = router;