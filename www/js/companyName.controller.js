/// <reference path="../typings/tsd.d.ts" />
var IonicWebcal;
(function (IonicWebcal) {
    var CompanyNameController = (function () {
        function CompanyNameController($cordovaDevice, $ionicPopup, $ionicPlatform, $location, ApiService) {
            var _this = this;
            this.$cordovaDevice = $cordovaDevice;
            this.$ionicPopup = $ionicPopup;
            this.$ionicPlatform = $ionicPlatform;
            this.$location = $location;
            this.ApiService = ApiService;
            this.uuid = "abc123";
            $ionicPlatform.ready(function () {
                try {
                    _this.uuid = $cordovaDevice.getUUID();
                }
                catch (ex) {
                }
            });
        }
        CompanyNameController.prototype.submit = function (companyName) {
            var _this = this;
            this.ApiService.authenticate(companyName, this.uuid).then(function () {
                _this.$ionicPopup.alert({
                    title: "Company name has been saved.",
                    template: "Company name has been saved."
                });
                _this.$location.path("#/dashboard");
            })
                .catch(function (msg) {
                _this.$ionicPopup.alert({
                    title: "Unable to authenticate device",
                    template: "Unable to authenticate device, please contact customer support.\n\n" + JSON.stringify(msg)
                });
            });
        };
        CompanyNameController.$inject = ["$cordovaDevice", "$ionicPopup", "$ionicPlatform", "$location", "ApiService"];
        return CompanyNameController;
    })();
    IonicWebcal.CompanyNameController = CompanyNameController;
    angular
        .module('IonicWebcal')
        .controller('CompanyNameController', CompanyNameController);
})(IonicWebcal || (IonicWebcal = {}));
