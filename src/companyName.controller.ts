/// <reference path="../typings/tsd.d.ts" />

module IonicWebcal.Controllers {

    export class CompanyNameController {

        private uuid: string = "";

        constructor(private $cordovaDevice: ngcordova.IDevice, private $ionicPopup: ionic.popup.IonicPopupService, private $ionicPlatform: ionic.platform.IonicPlatformService) {
            $ionicPlatform.ready(() => {
                this.uuid = $cordovaDevice.getUUID();
            });
        }

        submit() {
            var alertPopup = this.$ionicPopup.alert({
                title: 'Don\'t eat that!',
                template: this.uuid
            });
        }

    }

    angular
        .module('IonicWebcal')
        .controller('CompanyNameController', CompanyNameController);
}
