'use strict';

var angular = require('angular');

require('common/directives');

angular.module('MyApp',[
	'commonDirectives'
])

.run(['$rootScope','$anchorScroll',function($rootScope, $anchorScroll) {
	
	$rootScope.$on('$stateChangeStart', function() {
		// When we change state we look for top to set the scroll up
		$anchorScroll('top');
	});
}])

.controller('MyCtrl',['$scope', function($scope) {

	$scope.title = 'Janux Web Seed';

}]);


