var expenseApp = angular.module('expenseApp', ['ui.router', 'ngResource', 'ngCookies']);

expenseApp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.interceptors.push('expenseHttpInterceptor');

    $stateProvider
        .state('form', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })
        .state('report', {
            url: '/report',
            templateUrl: 'views/report.html',
            controller: 'reportController'
        })
        .state('createExpense', {
            url: '/createExpense',
            templateUrl: 'views/newExpense.html',
            controller: 'expenseController'
        });

    $urlRouterProvider.otherwise('/login');
});
