'use strict';
//
// lints javascript files
//

var path = require('path');

module.exports = function(gulp) {
	var cfg = gulp.cfg;
	
	gulp.task('scripts', function() {
		console.log('linting js files...');
		gulp.src(cfg.fileset.js)
			.pipe(gulp.plugins.jshint(cfg.jshint.rcfile))
			.pipe(gulp.plugins.jshint.reporter(cfg.jshint.reporter));
	});
};
