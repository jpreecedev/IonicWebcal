/// <reference path="../typings/tsd.d.ts" />

"use strict";

module IonicWebcal {
    export interface IApiService {
        authenticate(username: string, thumbprint: string): ng.IPromise<{}>
    }

    export class ApiService implements IApiService {

        private serviceUrl: string = "https://tachofleet.local/mobile/";

        static $inject = ["$q", "$http"];

        constructor(private $q: ng.IQService, private $http: ng.IHttpService) {

        }

        authenticate(username: string, thumbprint: string): ng.IPromise<{}> {
            var $defer = this.$q.defer();

            this.$http.post(this.serviceUrl + "authenticate", JSON.stringify({ username: username, thumbprint: thumbprint }))
                .then(() => {
                    $defer.resolve();
                })
                .catch((error: any) => {
                    $defer.reject(error);
                })

            return $defer.promise;
        };
    }

    angular
        .module("IonicWebcal")
        .service("ApiService", ApiService);
}