ngApp.controller('ContatosController', function($scope, $resource) {
        
    $scope.filtro = '';
    $scope.contatos = [];
    $scope.mensagem = { texto: '' };

    let Contato = $resource('/contatos/:id');

    function buscaContatos() {
        Contato.query(
            function(contatos) {
                $scope.contatos = contatos;
            }, 
            function(erro) {
                console.error(`Não foi possível obter os contatos: ${erro}`);
                $scope.mensagem = { texto: "Não foi possível obter a lista de contatos" };
            }
        );
    }

    $scope.remove = function(contato) {
        console.log(contato);
        Contato.delete({ id: contato._id },
            buscaContatos,
            function(erro) {
                console.log("Não foi possível remover o contato");
                console.log(erro);
                $scope.mensagem = { texto: "Não foi possível remover o contato" };
            });
    };

    buscaContatos();
})