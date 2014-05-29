'use strict';
//
// copy
//
// This task is kept for illustration purposes, 
// it is not used at this time (2014-03-31)
//

var path = require('path');

module.exports = function(gulp, cfg) {
	
	gulp.task('copy', function() {
		console.log('copying assets...');
		gulp.src(
			[
				'img/**/*.*',
				'css/font/**/*.*',
				'css/icon/**/*.*',
				'!**/*.less'
			], {
				cwd:  cfg.dir.src,
				base: cfg.dir.src + '/'
			}
		).pipe(gulp.dest(cfg.dir.dist));

		gulp.src(path.join(cfg.dir.bower, 'normalize.css', 'normalize.css'))
		.pipe(gulp.dest(path.join(cfg.dir.dist, 'css')));
	});

};
