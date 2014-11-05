'use strict';
// jshint: 'angular' variable is global and immutable
/* global angular: false */

angular.module('MyApp',[
	'ui.router'
])

.run([    '$rootScope','$state','$stateParams',
	function($rootScope , $state , $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	}
])

.config([ '$stateProvider','$urlRouterProvider',
	function($stateProvider , $urlRouterProvider) {
		
		// redirect from 1st parm to 2nd parm
		$urlRouterProvider.when('/c?id', '/contacts/:id');
		
		// redirect invalid urls to the home page
		$urlRouterProvider.otherwise('/');

		// 
		// State Configuration
		//
		
		$stateProvider.state('users', {
			// default state
			url: '/',
			templateUrl: 'app/user/index.html'
		})

		.state('roles', {
			url: '/roles',
			templateUrl: 'app/role/index.html'
		})

		.state('permissions', {
			url: '/permissions',
			templateUrl: 'app/permission/index.html'
		});
	}
]);

