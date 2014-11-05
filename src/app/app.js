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
		
		$stateProvider.state("accounts", {
			// default state
			url: "/",
			template: "<h1>Accounts</h1>"
		})

		.state("roles", {
			url: "/roles",
			template: "<h1>Roles</h1>"
		})

		.state("permissions", {
			url: "/permissions",
			template: "<h1>Permissions</h1>"
		})
	}
]);

