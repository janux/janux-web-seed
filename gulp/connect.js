'use strict';
//
// connect
//
var _ = require('lodash');

module.exports = function(gulp, cfg) {
	
	var config = {
		root: [cfg.dir.src, cfg.dir.dist],
		port: 9000,
		host: '0.0.0.0',
		open: false,
		livereload: false
	};

	var configReload = _.assign(_.cloneDeep(config), {
		livereload: true
	});

	var configDist = _.assign(_.cloneDeep(config), {
		root: cfg.dir.dist
	});

	gulp.task('connect', function() {cfg.plugins.connect.server(config)});
	gulp.task('connect-reload', function() {cfg.plugins.connect.server(configReload)});
	gulp.task('connect-dist', function() {cfg.plugins.connect.server(configDist)});
};
