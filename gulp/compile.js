'use strict';

module.exports = function(gulp, cfg) {
	
	gulp.task('compile', function() {
		console.log('compiling assets...');
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
