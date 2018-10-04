(function() {
  'use strict';

  angular
    .module('proyOxfam')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('oxfam', {
          url: '/oxfam',
          templateUrl: 'app/views/inicio.html',
          controller: 'MainControllerOxfam',
          controllerAs: 'mainOxfam'
      })

      .state('oxfam_dos', {
          url: '/oxfam_dos',
          templateUrl: 'app/views/inicio_dos.html'
        })

      .state('oxfam_tres', {
        url: '/oxfam_tres',
        templateUrl: 'app/views/inicio_tres.html'
      })

      .state('openData', {
        url: '/openData',
        templateUrl: 'app/views/openData.html'
      })

      .state('contacto', {
        url: '/contacto',
        templateUrl: 'app/views/contacto.html'
      })




    ;




    $urlRouterProvider.otherwise('/');
  }

})();
