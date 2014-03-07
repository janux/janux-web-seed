'use strict';
//
// Watch
//
module.exports = function(gulp, cfg) {
	gulp.task('watch',['connect'], function () {
			// Watch for changes that change during dev
			gulp.watch([
					cfg.dir.src + '/*.html',
					cfg.dir.dist + '/*.css',
					cfg.dir.js  + '/**/*.js',
					cfg.dir.img + '/**/*'
			], cfg.plugins.connect.reload);
			/*
			], function() {
				console.log('watch triggered, reloading page');
				cfg.plugins.connect.reload();
			});
			*/
			
			// Watch .less files
			// gulp.watch('app/styles/**/*.scss', ['styles']);
			gulp.watch( cfg.dir.css + '/*.less', ['styles']);

			/*
			gulp.watch( cfg.dir.src + '/index.html', function() {
				console.log('index.html file changed');
			});
			*/

			// Watch .js files
			// gulp.watch('app/scripts/**/*.js', ['scripts']);
			// gulp.watch( cfg.dir.js + '/**/*.js', ['scripts']);

			// Watch image files
			// gulp.watch('app/images/**/*', ['images']);
			// gulp.watch( cfg.dir.img + '/**/*', ['images']);
	});
}
