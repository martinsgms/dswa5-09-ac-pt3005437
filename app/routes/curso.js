
module.exports = app => {
    var controller = app.controllers.curso;

    app.route('/cursos')
        .get(controller.listCursos)
        .post(controller.salvaCurso);
    
    app.route('/cursos/:id')
        .get(controller.getCurso)
        .delete(controller.removeCurso);
}