const express = require('express')
const app = express()
const port = 8082

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// Routes Middlewares
const TodoRouter = require('./routes/todo.route');
app.use('/', TodoRouter);

// listening on port 8082
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})