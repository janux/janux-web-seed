'use strict';
//
// connect
//
module.exports = function(gulp, cfg) {

	gulp.task('connect', cfg.plugins.connect.server({
		root: [cfg.dir.src, cfg.dir.dist],
		port: 9000,
		livereload: { port: 35729}
	}));
};
