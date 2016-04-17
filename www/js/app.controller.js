/// <reference path="../typings/tsd.d.ts" />
var IonicWebcal;
(function (IonicWebcal) {
    var AppController = (function () {
        function AppController($scope, $ionicModal, $timeout) {
        }
        return AppController;
    })();
    IonicWebcal.AppController = AppController;
    angular
        .module('IonicWebcal')
        .controller('AppController', AppController);
})(IonicWebcal || (IonicWebcal = {}));
