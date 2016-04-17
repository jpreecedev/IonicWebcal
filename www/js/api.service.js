/// <reference path="../typings/tsd.d.ts" />
"use strict";
var IonicWebcal;
(function (IonicWebcal) {
    var ApiService = (function () {
        function ApiService($q, $http) {
            this.$q = $q;
            this.$http = $http;
            this.serviceUrl = "https://tachofleet.local/mobile/";
        }
        ApiService.prototype.authenticate = function (username, thumbprint) {
            var $defer = this.$q.defer();
            this.$http.post(this.serviceUrl + "authenticate", JSON.stringify({ username: username, thumbprint: thumbprint }))
                .then(function () {
                $defer.resolve();
            })
                .catch(function (error) {
                $defer.reject(error);
            });
            return $defer.promise;
        };
        ;
        ApiService.$inject = ["$q", "$http"];
        return ApiService;
    })();
    IonicWebcal.ApiService = ApiService;
    angular
        .module("IonicWebcal")
        .service("ApiService", ApiService);
})(IonicWebcal || (IonicWebcal = {}));
