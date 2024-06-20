const database = require('mysql2');

const pool = database.createPool({
    host : 'localhost',
    user : 'root',
    password : 'YourRootPassword',
    database : 'buttonsdata'
})

module.exports = pool.promise();