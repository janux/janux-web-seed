'use strict';

require('angular')
	.module('security', [])
	.factory('security', require('./security-factory.js'));
