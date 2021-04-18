ngApp.controller('ContatosController', function($scope) {
        $scope.total = 0;

        $scope.incrementa = () => {
            $scope.total++;
        }

        $scope.contatos =  [
            { _id: 1, nome: 'Gabriel Martins', email: 'gabriel.martins@ifsp.edu.br' },
            { _id: 2, nome: 'Maria Aparecida', email: 'maria.aparecida@ifsp.edu.br' },
            { _id: 3, nome: 'João Teixeira', email: 'joao.teixeira@ifsp.edu.br' }
        ]

        $scope.filtro = '';
    }
)