const mysql2 = require('mysql2')

mysql2.createConnection(
    {
    host:'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'crud.js'
    },
    'single'
)

module.exports = mysql2

