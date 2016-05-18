angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'app.login'
]);
angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/app-connect',
            templateProvider: function ($templateCache) {
                return $templateCache.get('menu/menu.html');
            },
            controller: 'AppCtrl'
        });
    $urlRouterProvider.otherwise("/");

}).controller('AppCtrl', function ($state, $scope) {

}).run(function ($rootScope) {

});