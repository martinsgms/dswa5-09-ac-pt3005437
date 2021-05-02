ngApp.controller('CursosController', function($scope, $resource) {
        
    $scope.filtro = '';
    $scope.cursos = [];
    $scope.mensagem = { texto: '' };

    let Curso = $resource('/cursos/:id');

    function buscaCursos() {
        Curso.query(
            function(cursos) {
                $scope.cursos = cursos;
            }, 
            function(erro) {
                console.error(`Não foi possível obter os cursos: ${erro}`);
                $scope.mensagem = { texto: "Não foi possível obter a lista de cursos" };
            }
        );
    }

    $scope.remove = function(curso) {
        console.log(curso);
        Curso.delete({ id: curso._id },
            buscaCursos,
            function(erro) {
                console.log("Não foi possível remover o curso");
                console.log(erro);
                $scope.mensagem = { texto: "Não foi possível remover o curso" };
            });
    };

    buscaCursos();
})


