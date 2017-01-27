(function() {
    'use strict'
    angular.module('app').config(config)

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state({
                name: 'city',
                url: '/city',
                component: 'city'
            }),
            $stateProvider
            .state({
                name: 'name',
                url: '/',
                component: 'name'
            }),
            $stateProvider
            .state({
                name: 'email',
                url: '/email',
                component: 'email'
            }),
            $stateProvider
            .state({
                name: 'success',
                url: '/success',
                component: 'success'
            })
    }
})();
