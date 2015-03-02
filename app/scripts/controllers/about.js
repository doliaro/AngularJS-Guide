'use strict';

/**
 * @ngdoc function
 * @name guideApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the guideApp
 */
angular.module('guideApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
