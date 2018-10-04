(function() {
  'use strict';

  angular
    .module('proyOxfam')
    .controller('MainControllerOxfam', MainControllerOxfam);

  /** @ngInject */
  function MainControllerOxfam($timeout, $log, webDevTec, toastr) {
    var vm = this;

    vm.varShowHide=true;
    vm.exampleShowHide = function () {
      vm.varShowHide =! vm.varShowHide;
    }



  }
})();
