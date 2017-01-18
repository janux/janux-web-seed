'use strict';

require('angular').module('commonDirectives',[])

//
// It can be used instead of ng-click when the element is within ng-repeat,
// usually ng-click fails in this context in iOS
//
.directive('ngMobileClick', [function () {
	return function (scope, elem, attrs) {
		elem.bind('touchstart click', function (e) {
			e.preventDefault();
			e.stopPropagation();

			scope.$apply(attrs.ngMobileClick);
		});
	};
}]);