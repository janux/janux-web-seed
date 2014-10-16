'use strict';
//
// lints javascript files
//

var path = require('path');

module.exports = function(gulp, cfg) {
	
	gulp.task('scripts', function() {
		console.log('linting js files...');
		gulp.src(cfg.fileset.js)
			.pipe(cfg.plugins.jshint(cfg.jshint.rcfile))
			.pipe(cfg.plugins.jshint.reporter(cfg.jshint.reporter));
	});
};
