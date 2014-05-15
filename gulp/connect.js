'use strict';
//
// connect
//
var _ = require('lodash');

module.exports = function(gulp, cfg) {
	
	var config = {
		root: [cfg.dir.src, cfg.dir.dist],
		port: 9000,
		open: false,
		livereload: false
	};

	var configReload = _.assign(config, {
		livereload: true,
	});


	gulp.task('connect', function() {cfg.plugins.connect.server(config)});

	gulp.task('connect-reload', function() {cfg.plugins.connect.server(configReload)});
};
