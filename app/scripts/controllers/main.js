'use strict';

/**
 * @ngdoc function
 * @name guideApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guideApp
 */
angular.module('guideApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.myname ='AngularJS - Quick and Dirty';

})
  .controller('Editor', function ($scope) {
  
    $scope.showtooltip = false;
    $scope.value = 'Edit me.';
    
      $scope.hideTooltip = function(){
        $scope.showtooltip = false;
      }
       $scope.toggleTooltip = function(e){
        e.stopPropagation();
        $scope.showtooltip = !$scope.showtooltip;
      }
});
