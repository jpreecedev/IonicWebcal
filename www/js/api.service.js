/// <reference path="../typings/tsd.d.ts" />
var IonicWebcal;
(function (IonicWebcal) {
    var Services;
    (function (Services) {
        "use strict";
        var ApiService = (function () {
            function ApiService($q, $http) {
                this.$q = $q;
                this.$http = $http;
                this.$inject = ["$q, $http"];
            }
            ApiService.prototype.authenticate = function () {
                var $defer = this.$q.defer();
                return $defer.promise;
            };
            ;
            return ApiService;
        })();
        Services.ApiService = ApiService;
        angular
            .module("IonicWebcal")
            .service("ApiService", ApiService);
    })(Services = IonicWebcal.Services || (IonicWebcal.Services = {}));
})(IonicWebcal || (IonicWebcal = {}));
