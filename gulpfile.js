'use strict';

var gulp = require('gulp');


// Load plugins
var 
	pkg     = require('./package.json'),
	plugins = require('gulp-load-plugins')()
;

var src = 'src';

var cfg = {
	dir: {
		src:  src,
		css:  src + '/css',
		dist: 'dist',
		img:  src + '/img',
		js:   src + '/js',
		test: 'test'
	},
	pkg:     pkg,
  plugins: plugins
}; 

//
// Load all the tasks that are defined in the 'gulp' folder.  For now this is manual, but this
// mechanism could be enhanced into a plugin that load all tasks defined in the 'gulp' sub-folder
//
['clean','copy','connect','styles','watch'].forEach( function(taskName) {
	require('./gulp/'+taskName)(gulp, cfg);
});

//
// Process all assets for development
//
gulp.task('compile', ['styles']);

//
// Does a clean dev build 
//
// this ensures that 'clean' is run before compile; otherwise, 
// both tasks run concurrently and errors may occur
gulp.task('build', ['clean'], function() {
	gulp.start('compile');
});

//
// Builds and runs for development
//
gulp.task('serve', ['build'], function() {
	gulp.start('watch');
});

// Alias for 'serve'
gulp.task('server',['serve']);

// Simply build by default
gulp.task('default', ['build']);
