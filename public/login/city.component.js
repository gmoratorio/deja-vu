(function() {
    'use strict';

    angular.module('app')
        .component('city', {
            controller: controller,
            templateUrl: './login/city.html'
        })

    function controller($state, functions, $stateParams) {
        const vm = this;

        vm.$onInit = function() {
            console.log(vm.name);
        }

        vm.citySubmit = function() {
            const currentLocation = window.location.pathname.replace("/", "");
            const nextView = functions.returnRandomView(currentLocation);
            $state.go(nextView);
        }
    }


}());
