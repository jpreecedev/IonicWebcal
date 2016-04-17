/// <reference path="../typings/tsd.d.ts" />
var IonicWebcal;
(function (IonicWebcal) {
    var Controllers;
    (function (Controllers) {
        var CompanyNameController = (function () {
            function CompanyNameController($cordovaDevice, $ionicPopup, $ionicPlatform) {
                var _this = this;
                this.$cordovaDevice = $cordovaDevice;
                this.$ionicPopup = $ionicPopup;
                this.$ionicPlatform = $ionicPlatform;
                this.uuid = "";
                $ionicPlatform.ready(function () {
                    _this.uuid = $cordovaDevice.getUUID();
                });
            }
            CompanyNameController.prototype.submit = function () {
                var alertPopup = this.$ionicPopup.alert({
                    title: 'Don\'t eat that!',
                    template: this.uuid
                });
            };
            return CompanyNameController;
        })();
        Controllers.CompanyNameController = CompanyNameController;
        angular
            .module('IonicWebcal')
            .controller('CompanyNameController', CompanyNameController);
    })(Controllers = IonicWebcal.Controllers || (IonicWebcal.Controllers = {}));
})(IonicWebcal || (IonicWebcal = {}));
