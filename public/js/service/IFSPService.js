ngApp.factory('Contato', function($resource) {
    return $resource('/contatos/:id');
});

ngApp.factory('Curso', function($resource) {
    return $resource('/cursos/:id');
});