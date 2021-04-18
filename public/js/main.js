var ngApp = angular.module('ifsp', ['ngRoute']);

ngApp.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);

ngApp.config($routeProvider => {
    
    $routeProvider.when('/contatos', {
        templateUrl : '/partials/contatos.html',
        controller : 'ContatosController'
    });

    $routeProvider.when('/cursos', {
        templateUrl : '/partials/cursos.html',
        controller : 'CursosController'
    });

    $routeProvider.when('/contato/:id', {
        templateUrl : '/partials/contato.html',
        controller : 'ContatoController'
    });

    $routeProvider.otherwise({redirectTo: '/contatos'})
})