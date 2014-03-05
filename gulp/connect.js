'use strict';

module.exports = function(gulp, cfg) {

	gulp.task('connect', cfg.plugins.connect.server({
		root: [cfg.dir.src],
		port: 9000,
		livereload: true
	}));
};
