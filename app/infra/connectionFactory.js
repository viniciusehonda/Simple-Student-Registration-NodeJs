var mysql = require('mysql');

function createDBConnection() {

    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '753159',
        database : 'schoolDB'
    });
}

module.exports = function() {
    return createDBConnection;
}