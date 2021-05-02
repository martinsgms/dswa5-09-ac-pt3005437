
module.exports = app => {
    var controller = app.controllers.curso;

    app.route('/cursos')
        .get(controller.listCursos);
    
    app.route('/cursos/:id')
        .get(controller.getCurso)
        .delete(controller.removeCurso);
}