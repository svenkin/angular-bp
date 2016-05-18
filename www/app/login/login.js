angular.module('app.login', [
]);
angular.module('app.login').config(function ($stateProvider) {
    $stateProvider
        .state('app.login', {
            url: '/login',
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl'
        });
}).controller('LoginCtrl', function ($scope, ServerCon, $state) {});