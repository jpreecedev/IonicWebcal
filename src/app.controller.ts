/// <reference path="../typings/tsd.d.ts" />

module IonicWebcal.Controllers {

    export class AppController {

        constructor($scope: ng.IScope, $ionicModal, $timeout: ng.ITimeoutService) {

        }

    }

    angular
        .module('IonicWebcal')
        .controller('AppController', AppController);

}