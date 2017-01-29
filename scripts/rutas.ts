/// <reference path="_references.d.ts"/>
namespace app {
    "use strict";
    aplicacion.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
      $urlRouterProvider.otherwise("/");
      $stateProvider
        .state(ademiaMain)
        .state(itGovernance)
        .state(modelosDeServicio)
        .state(productos)
        .state(software)
        .state(casosDeExito)
        .state(capacitacion)
        .state(contacto)
        .state(quienesSomos)
        ;
    });
}
