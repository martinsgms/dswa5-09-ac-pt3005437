var ngApp = angular.module('ifsp', ['ngRoute', 'ngResource']);

ngApp.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

ngApp.config($routeProvider => {
    
    $routeProvider.when('/contatos', {
        templateUrl : '/partials/contatos.html',
        controller : 'ContatosController'
    });

    $routeProvider.when('/contato', {
        templateUrl : '/partials/contato.html',
        controller : 'ContatoController'
    });

    $routeProvider.when('/contato/:id', {
        templateUrl : '/partials/contato.html',
        controller : 'ContatoController'
    });

    $routeProvider.when('/cursos', {
        templateUrl : '/partials/cursos.html',
        controller : 'CursosController'
    });

    $routeProvider.when('/curso', {
        templateUrl : '/partials/curso.html',
        controller : 'CursoController'
    });

    $routeProvider.when('/curso/:id', {
        templateUrl : '/partials/curso.html',
        controller : 'CursoController'
    });

    $routeProvider.otherwise({redirectTo: '/contatos'})
})