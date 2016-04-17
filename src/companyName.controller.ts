/// <reference path="../typings/tsd.d.ts" />

module IonicWebcal {
    export class CompanyNameController {

        private uuid: string = "abc123";

        static $inject = ["$cordovaDevice", "$ionicPopup", "$ionicPlatform", "$location", "ApiService"];

        constructor(private $cordovaDevice: ngcordova.IDevice, private $ionicPopup: ionic.popup.IonicPopupService, private $ionicPlatform: ionic.platform.IonicPlatformService, private $location: ng.ILocationService, private ApiService: any) {
            $ionicPlatform.ready(() => {
                try {
                    this.uuid = $cordovaDevice.getUUID();
                } catch (ex) {
                }
            });
        }

        submit(companyName: string) {
            this.ApiService.authenticate(companyName, this.uuid).then(() => {
                this.$ionicPopup.alert({
                    title: "Company name has been saved.",
                    template: "Company name has been saved."
                });
                this.$location.path("#/dashboard");
            })
                .catch((msg: any) => {
                    this.$ionicPopup.alert({
                        title: "Unable to authenticate device",
                        template: "Unable to authenticate device, please contact customer support.\n\n" + JSON.stringify(msg)
                    });
                });
        }

    }

    angular
        .module('IonicWebcal')
        .controller('CompanyNameController', CompanyNameController);
}