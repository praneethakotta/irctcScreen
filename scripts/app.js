'use strict';
angular.module('irctc', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('irctc', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html'
                    }  ,
                    'content': {
                        templateUrl : 'views/planJourney.html'
                    }
                }
            })
        .state('irctc.trainsList', {
                url:'trainsList',
                views: {
                    'content@': {
                        templateUrl : 'views/trainsList.html'
                   }
                }
            });
    $urlRouterProvider.otherwise('/');
    });