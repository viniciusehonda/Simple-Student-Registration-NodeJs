function StudentsDAO(connection) {

    this._connection = connection;
}

StudentsDAO.prototype.list = function(callback) {

    this._connection.query('SELECT * FROM students', callback);
}

StudentsDAO.prototype.save = function(callback) {

    this._connection.query('INSERT INTO students SET ?', student, callback);
}

module.exports = function() {
    
    return StudentsDAO;
}