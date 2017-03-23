'use strict';
angular.module('irctc')

        .controller('listController',['$scope','trainsList',function($scope , trainsList){
            $scope.trainsInfo= trainsList.getTrainsList();
            
        }])
;