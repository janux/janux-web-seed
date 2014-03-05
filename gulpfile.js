'use strict';

var gulp = require('gulp');


// Load plugins
var plugins = require('gulp-load-plugins')();

var cfg = {
	dir: {
		src:  'src',
		dist: 'dist',
		test: 'test'
	},
  plugins: plugins
}; 

//
// Load all the tasks that are defined in the 'gulp' folder.  For now this is manual, but this
// mechanism could be enhanced into a plugin that load all tasks defined in the 'gulp' sub-folder
//
['compile','connect'].forEach( function(taskName) {
	require('./gulp/'+taskName)(gulp, cfg);
});

// Clean
gulp.task('clean', function () {
	return gulp.src([
		cfg.dir.dist
	], {read: false})
	.pipe(cfg.plugins.clean());
});

// this ensures that 'clean' is run before compile; otherwise, both tasks run concurrently 
// and errors may occur
gulp.task('build', ['clean'], function() {
	gulp.start('compile');
});

gulp.task('serve', ['connect']);

gulp.task('default', ['build']);
