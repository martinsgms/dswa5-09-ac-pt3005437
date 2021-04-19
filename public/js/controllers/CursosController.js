ngApp.controller('CursosController', function($scope, $resource) {
        
    $scope.filtro = '';
    $scope.cursos = [];

    let Curso = $resource('/cursos');

    function buscaCursos() {
        Curso.query(
            function(cursos) {
                $scope.cursos = cursos;
            }, 
            function(erro) {
                console.error(`Não foi possível obter os cursos: ${erro}`);
            }
        );
    }

    buscaCursos();
})


