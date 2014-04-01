'use strict';
//
// copy
//
// This task is kept for illustration purposes, 
// it is not used at this time (2014-03-31)
//
module.exports = function(gulp, cfg) {
	
	gulp.task('copy', function() {
		console.log('copying assets...');
		gulp.src(
			[
				'*.{ico,png,txt}',
				'.htaccess',
				'img/**/*.*',
				'{,*/}*.html',
				'css/font/*.*'
			], {
				cwd:  cfg.dir.src,
				base: cfg.dir.src + '/'
			}
		).pipe(gulp.dest(cfg.dir.dist));
	});

};
