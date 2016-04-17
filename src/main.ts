angular.module("IonicWebcal", ["ionic", "ngCordova"])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppController'
      })

      .state("app.companyName", {
        url: "/companyName",
        views: {
          "menuContent": {
            controller: "CompanyNameController",
            templateUrl: "templates/companyName.html",
          }
        }
      })

      .state("app.centreCheck", {
        url: "/centreCheck",
        views: {
          "menuContent": {
            controller: "CentreCheckController",
            templateUrl: "templates/centreCheck.html",
          }
        }
      })

      .state("app.dashboard", {
        url: "/dashboard",
        views: {
          "menuContent": {
            controller: "DashboardController",
            templateUrl: "templates/dashboard.html"
          }
        }
      });

    $urlRouterProvider.otherwise("/app/companyName");
  });