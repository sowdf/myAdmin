var mysql = require('mysql');

var connection =  mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: 'a2153218',
    database: 'myadmin'
});

connection.connect();

module.exports = connection;
