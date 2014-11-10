'use strict';

var out = ['$http','$q', 
function(   $http,  $q) {

	//
	// The public API
	//
	var service = {
		requestCurrentUser: function() {
			if ( service.isAuthenticated() ) {
				return $q.when(service.currentUser);
			} else {
				return $http.get('/current-user').then(function(response) {
					service.currentUser = response.data.user;
					return service.currentService;
				});
			}
		},

		currentUser: { 
			name: 'quietsky'
		},

		isAuthenticated: function() {
			return !!service.currentUser;
		}
	};

	return service;
}];

module.exports = out;
