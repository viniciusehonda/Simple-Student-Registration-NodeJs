module.exports = function(app) {

    app.get('/students', function(req, res) {

        let connection = app.infra.connectionFactory();
        let studentsDAO = new app.infra.StudentsDAO(connection);

        studentsDAO.list(function(err, results) {
            
            res.render('students/StudentList', {list: results});
            //console.log(err);
        });

        connection.end();

    });

    app.get('/students/StudentForm', function(req, res){

        res.render('students/StudentForm');
    });

    app.post('/students/',  function(req, res) {
        let student = req.body;
        console.log(req);

        let connection = app.infra.connectionFactory();
        let studentsDAO = new app.infra.StudentsDAO(connection);

        studentsDAO.save(student, function(err, results) {
            res.redirect('/students');
            //console.log(err);
        });

        connection.end();
    });

}