// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'mango'])

.config(function(){
  Mango.setPublicKey('YOUR PUBLIC API KEY');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('IndexController', function($scope, $ionicPopup){
  $scope.checkout = function(error, data) {
    if(error) {
      // Show error
      $ionicPopup.alert({
        title: 'Error',
        template: 'There was an error while processing your payment.'
      });

    } else {
      // Send the data to your server
      $ionicPopup.alert({
        title: 'Success',
        template: 'Payment token successfully generated.'
      });
    }
  };
});
