'use strict';
//
// connect
//
var _ = require('lodash');

module.exports = function(gulp) {
	var cfg = gulp.cfg;
	
	var configReload = _.assign(_.cloneDeep(cfg.server), {
		livereload: true
	});

	var configDist = _.assign(_.cloneDeep(cfg.server), {
		root: cfg.dir.dist
	});

	// runs a connect dev server, without reloading
	gulp.task('connect',        function() {gulp.plugins.connect.server(cfg.server)});

	// runs a connect dev server with reloading, used in 'watch' target
	gulp.task('connect-reload', function() {gulp.plugins.connect.server(configReload)});

	// runs a connect server from dist, used to smoketest packaged app
	gulp.task('connect-dist',   function() {gulp.plugins.connect.server(configDist)});
};
