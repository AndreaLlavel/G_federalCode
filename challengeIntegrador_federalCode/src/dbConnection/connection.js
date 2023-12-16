import { createConnection } from 'mysql2'

export default () =>
    createConnection(
    {
    host:'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'baseDeDatos'
    },
    'single'
)

