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

	// Warning: The configuration below does not work, because the 'config' object
	// is stored as a singleton inside the gulp-connect module, so the last config
	// always wins; presumably this will be changed in an upcoming version of
	// gulp-connect

	gulp.task('connect', cfg.plugins.connect.server(config));

	gulp.task('connect-reload', cfg.plugins.connect.server(
		_.assign(config, {
			livereload: true,
			open: {
				file: 'index.html',
			}
		})
	));
};
