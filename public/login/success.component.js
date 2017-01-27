(function() {
    'use strict';

    angular.module('app')
        .component('success', {
            controller: controller,
            templateUrl: './login/success.html'
        })

    function controller($state) {
        const vm = this;

        vm.$onInit = function() {

        }

        vm.emailSubmit = function() {
          // console.log(vm.email);
          // $state.go('success');
        }
    }


}());
