(function() {
  'use strict';

  angular
    .module('proyOxfam')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
