var app;
(function (app) {
    "use strict";
    app.aplicacion = angular.module("aplicacion", [
        "ngAnimate",
        "ui.bootstrap",
        "ui.router",
        "toastr"
    ]);
})(app || (app = {}));
var app;
(function (app) {
    app.ademiaMain = {
        name: "ademia",
        url: "/",
        templateUrl: "assets/views/home.html"
    };
    app.quienesSomos = {
        name: "quienesSomos",
        url: "/quienesSomos",
        templateUrl: "assets/views/quienesSomos.html"
    };
    app.itGovernance = {
        name: "itGovernance",
        url: "/itgovernance",
        templateUrl: "assets/views/itGovernance.html"
    };
    app.modelosDeServicio = {
        name: "modelosDeServicio",
        url: "/modelosdeservicio",
        templateUrl: "assets/views/modeloServicios.html"
    };
    app.productos = {
        name: "productos",
        url: "/productos",
        templateUrl: "assets/views/productos.html"
    };
    app.software = {
        name: "software",
        url: "/software",
        templateUrl: "assets/views/software.html"
    };
    app.casosDeExito = {
        name: "casosDeExito",
        url: "/casosdeexito",
        templateUrl: "assets/views/casosDeExito.html"
    };
    app.capacitacion = {
        name: "capacitacion",
        url: "/capacitacion",
        templateUrl: "assets/views/capacitacion.html"
    };
    app.contacto = {
        name: "contacto",
        url: "/contacto",
        templateUrl: "assets/views/contacto.html"
    };
})(app || (app = {}));
var app;
(function (app) {
    "use strict";
    app.aplicacion.factory("modeloContacto", function ($http) {
        return {};
    });
})(app || (app = {}));
var app;
(function (app) {
    "use strict";
    app.aplicacion.controller("controladroContacto", function ($scope, $http, $uibModal) {
    });
})(app || (app = {}));
var app;
(function (app) {
    "use strict";
    app.aplicacion.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state(app.ademiaMain)
            .state(app.itGovernance)
            .state(app.modelosDeServicio)
            .state(app.productos)
            .state(app.software)
            .state(app.casosDeExito)
            .state(app.capacitacion)
            .state(app.contacto)
            .state(app.quienesSomos);
    });
})(app || (app = {}));
