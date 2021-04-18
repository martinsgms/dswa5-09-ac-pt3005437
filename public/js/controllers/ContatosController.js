ngApp.controller('ContatosController', function($scope) {
        $scope.total = 0;

        $scope.incrementa = () => {
            $scope.total++;
        }
    }
)