var currentTimeApp = angular.module('currentTimeApp', []);

currentTimeApp.constant('myConfig', { currentTime: Date.now() });

currentTimeApp.controller('currentTimeController', ['$scope', 'myConfig', function ($scope, myConfig) {
    $scope.time = myConfig.currentTime;
}]);
