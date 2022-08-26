const { Pool } = require('pg');

const pool = new Pool({
    user:'postgres',
    password: '',
    host: 'localhost',
    port: 8000,
    database: 'todotut'
})

module.exports = pool;
