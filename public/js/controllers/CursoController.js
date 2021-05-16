ngApp.controller('CursoController', function($scope, $routeParams, $resource) {
    
    var Curso = $resource('/cursos/:id');

    if ($routeParams.id) {
        Curso.get({ id: $routeParams.id },
            function(curso) {
                $scope.curso = curso;
            },
            function(erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível obter o curso.'
                };
                console.log($routeParams.id);
            }
        );

    } else {
        $scope.curso = new Curso();
    }

    $scope.salva = function() {
        $scope.curso.$save()
            .then(function() {
                $scope.mensagem = { texto: 'Salvo com sucesso' };
                $scope.curso = new Curso();
            })
            .catch(function(erro) {
                $scope.mensagem = { texto: 'Não foi possível salvar' };
        });
    };
        

})