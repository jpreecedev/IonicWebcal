/// <reference path="../typings/tsd.d.ts" />
var IonicWebcal;
(function (IonicWebcal) {
    var Controllers;
    (function (Controllers) {
        var AppController = (function () {
            function AppController($scope, $ionicModal, $timeout) {
            }
            return AppController;
        })();
        Controllers.AppController = AppController;
        angular
            .module('IonicWebcal')
            .controller('AppController', AppController);
    })(Controllers = IonicWebcal.Controllers || (IonicWebcal.Controllers = {}));
})(IonicWebcal || (IonicWebcal = {}));
