'use strict';
//
// Watch
//
module.exports = function(gulp, cfg) {

	gulp.task('watch:clean', ['clean'], function() {
		gulp.start('watch');
	});

	gulp.task('watch',['build','connect-reload'], function () {

		// Watch for changes that change during dev
		gulp.watch([
				cfg.dir.dist + '/*.html',
				cfg.dir.dist + '/css/*.css',
				cfg.dir.src + '/*.html',
				cfg.dir.js  + '/**/*.js',
				cfg.dir.img + '/**/*'
		], {
			debounceDelay: 50
		},function(event) {
			// console.log('watch triggered:', event );
			gulp.src(event.path).pipe(cfg.plugins.connect.reload());
		});

		// gulp.watch( 'dist/**/*', function(event) {
		//		console.log('event: ', event);
		// });
		
		// Watch .less files
		gulp.watch( cfg.dir.css + '/*.less', ['styles']);

		gulp.watch( cfg.fileset.jade, ['jade']);

		// Watch .js files
		// gulp.watch('app/scripts/**/*.js', ['scripts']);
		// gulp.watch( cfg.dir.js + '/**/*.js', ['scripts']);

		// Watch image files
		// gulp.watch('app/images/**/*', ['images']);
		// gulp.watch( cfg.dir.img + '/**/*', ['images']);
	});
}
