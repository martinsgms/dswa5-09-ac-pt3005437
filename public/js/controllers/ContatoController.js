ngApp.controller('ContatoController', function($scope, $routeParams, Contato) {
    
    if ($routeParams.id) {
        Contato.get({ id: $routeParams.id },
            function(contato) {
                $scope.contato = contato;
            },
            function(erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível obter o contato.'
                };
                console.log($routeParams.id);
            }
        );
    } else {
        $scope.contato = new Contato();
    }
    
    $scope.salva = function() {
        $scope.contato.$save()
            .then(function() {
                $scope.mensagem = { texto: 'Salvo com sucesso' };
                $scope.contato = new Contato();
            })
            .catch(function(erro) {
                $scope.mensagem = { texto: 'Não foi possível salvar' };
        });
    };

})