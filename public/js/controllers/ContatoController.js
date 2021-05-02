ngApp.controller('ContatoController', function($scope, $routeParams, $resource) {
    
    var Contato = $resource('/contatos/:id');
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

})