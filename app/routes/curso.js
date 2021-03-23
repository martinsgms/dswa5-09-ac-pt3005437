
module.exports = app => {
    var controller = app.controllers.curso;
    app.get('/cursos', controller.listCursos);
    app.get('/cursos/:id', controller.getCurso);
}