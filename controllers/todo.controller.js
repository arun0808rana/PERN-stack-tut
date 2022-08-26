const { pool } = require('../db/db');

const onGetAllTodos = async (req, res) => {
    try {
        const allTodos = await pool.query('SELECT * FROM todotut');
        res.status(200).json(allTodos.rows);
    } catch (err) {
        console.log('Error in todo.controller.js file in getting all todos: ', err)
    }
}

const onCreateNewTodo = async (req, res) => {
    const description = req.body?.desc;

    if (!description) {
        return res.status(400).json({ error: 'Task description is required!', success: false });
    }

    try {
        const newTodo = await pool.query('INSERT INTO todotut (description) VALUES($1) RETURNING *', [description]);
        res.status(200).json(newTodo.rows[0]);
    } catch (err) {
        console.log('Error in todo.controller.js file on onCreateNewTodo():', err.message);
    }
}

//  todo: https://javascript.plainenglish.io/building-rest-api-with-node-express-and-postgresql-28d8cfe30d
// todo: https://github.com/ousecTic/pern-todo-app/blob/master/server/index.js
//  todo : https://github.com/the-devdesigner/pern-todo-app/blob/master/server/controllers/todo.controller.ts

module.exports = { onGetAllTodos, onCreateNewTodo }