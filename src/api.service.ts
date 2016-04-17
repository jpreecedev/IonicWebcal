/// <reference path="../typings/tsd.d.ts" />

module IonicWebcal.Services {
    "use strict";

    export class ApiService {

        $inject = ["$q, $http"];

        constructor(private $q: ng.IQService, private $http: ng.IHttpService) {

        }

        authenticate() {
            var $defer = this.$q.defer();

            return $defer.promise;
        };
    }

    angular
        .module("IonicWebcal")
        .service("ApiService", ApiService);
}