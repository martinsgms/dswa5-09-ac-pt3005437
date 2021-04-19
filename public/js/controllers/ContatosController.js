ngApp.controller('ContatosController', function($scope, $resource) {
        
    $scope.filtro = '';
    $scope.contatos = []

    let Contato = $resource('/contatos');

    function buscaContatos() {
        Contato.query(
            function(contatos) {
                $scope.contatos = contatos;
            }, 
            function(erro) {
                console.error(`Não foi possível obter os contatos: ${erro}`);
            }
        );
    }

    buscaContatos();
})