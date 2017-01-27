(function() {
    'use strict';

    angular.module('app')
        .component('email', {
            controller: controller,
            templateUrl: './login/email.html'
        })

    function controller($state, functions) {
        const vm = this;

        vm.$onInit = function() {

        }

        vm.emailSubmit = function() {
          const currentLocation = window.location.pathname.replace("/", "");
          const nextView = functions.returnRandomView(currentLocation);
          $state.go(nextView);
          }
    }


}());
