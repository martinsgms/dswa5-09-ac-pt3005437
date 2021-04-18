ngApp.controller('ContatosController', $scope => {
        $scope.total = 0;

        $scope.incrementa = () => {
            $scope.total++;
        }
    }
)