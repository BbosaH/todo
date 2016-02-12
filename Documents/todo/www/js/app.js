// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
'use strict';

angular.module('starter', ['ionic','startercontrollers','loggingmodule','account','celebs'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing.It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider) {
    $stateProvider
  .state('splash', {
    url: '/splash',
    templateUrl: 'templates/splash.html'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'
  })
  .state('begin', {
    url: '/begin',
    templateUrl: 'templates/begin.html'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html'
  })
  .state('trendingconcerts', {
    url: '/trendingconcerts',
    templateUrl: 'templates/trendingconcerts.html'
  })
  .state('artists', {
    url: '/artists',
    templateUrl: 'templates/artists.html'
  })
  .state('celebprofile', {
    url: '/celebprofile',
    templateUrl: 'templates/celebprofile.html'
  })
  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html'
  })
  .state('otherfans', {
    url: '/otherfans',
    templateUrl: 'templates/otherfans.html'
  })
  .state('slide', {
    url: '/slide',
    templateUrl: 'templates/slide.html'
  })
  .state('stripped', {
    url: '/stripped',
    templateUrl: 'templates/strippedtabs.html'
  })
  .state('celebs', {
    url: '/celebs',
    templateUrl: 'templates/celebs.html'
  })


})
