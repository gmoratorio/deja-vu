(function() {
    'use strict';

    angular.module('app')
        .component('name', {
            controller: controller,
            templateUrl: './login/name.html'
        })

    function controller($state, functions) {
        const vm = this;

        vm.$onInit = function() {

        }

        vm.nameSubmit = function() {
          const currentLocation = "name";
          const nextView = functions.returnRandomView(currentLocation);
          
          $state.go(nextView);
        }
    }


}());
