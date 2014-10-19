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
		gulp.watch(cfg.fileset.watch, {debounceDelay: 250}, function(event) {
			// console.log('watch triggered:', event );
			gulp.src(path.join(cfg.dir.dist,'*.html')).pipe(cfg.plugins.connect.reload());
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
