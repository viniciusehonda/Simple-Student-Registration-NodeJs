module.exports = function(app) {

    app.get('/students', function(req, res) {

        let connection = app.infra.connectionFactory();
        let studentsDAO = new app.infra.StudentsDAO(connection);

        studentsDAO.list(function(err, results) {
            res.render('students/StudentList', {list: results});
        });

        connection.end();

    });

    app.get('/students/StudentForm', function(req, res){

        res.render('students/StudentsForm');
    });

    app.post('/students/',  function(req, res) {

        let connection = app.infra.connectionFactory();
        let studentsDAO = new app.infra.StudentsDAO(connection);

        studentsDAO.save(function(err, results) {
            res.redirect('/students');
        });

        connection.end();
    });

}