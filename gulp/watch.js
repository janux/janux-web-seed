'use strict';
//
// Watch
//
module.exports = function(gulp, cfg) {

	gulp.task('watch:clean', ['clean'], function() {
		gulp.start('watch');
	});

	gulp.task('watch',['build','connect-reload'], function () {

		var watched = [
			cfg.dir.dist + '/*.html',
			cfg.dir.dist + '/**/*.css',
			cfg.dir.src + '/*.html',
			cfg.dir.js  + '/**/*.js',
			cfg.dir.img + '/**/*'
		];

		// Watch for changes that change during dev
		gulp.watch(watched, {debounceDelay: 250}, function(event) {
			console.log('watch triggered:', event );
			gulp.src(cfg.dir.dist + '/*.html').pipe(cfg.plugins.connect.reload());
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
