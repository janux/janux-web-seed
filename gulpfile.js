'use strict';

var gulp = require('gulp');

// Load plugins
var task = require('gulp-load-plugins')();

var config = {
	dir: {
		src:  'src',
		dist: 'dist',
		test: 'test'
	}
}; 

var dir = config.dir;

// Clean
gulp.task('clean', function () {
	return gulp.src([
		dir.dist
	], {read: false})
	.pipe(task.clean());
});

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
			cwd:  dir.src,
			base: dir.src + '/'
		}
	).pipe(gulp.dest(dir.dist));
});

// this ensures that 'clean' is run before compile; otherwise, both tasks run concurrently 
// and errors may occur
gulp.task('build', ['clean'], function() {
	gulp.start('compile');
});

gulp.task('default', ['build']);

// Default task
/*
gulp.task('default', ['clean'], function () {
	gulp.start('build');
});
*/
