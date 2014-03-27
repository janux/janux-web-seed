'use strict';

var gulp = require('gulp'),
  path = require('path');

// Load plugins
var 
	pkg     = require('./package.json'),
	plugins = require('gulp-load-plugins')()
;

var src = 'src';

var cfg = {
	dir: {
		src:   src,
		bower: path.join(src, 'bower'),
		css:   path.join(src, 'css'),
		dist:  'dist',
		img:   path.join(src, 'img'),
		js:    path.join(src, 'js'),
		test: 'test'
	},
	file: {
		jade:  path.join(src, '/**/*.jade')
	},
	pkg:     pkg,
  plugins: plugins
}; 

//
// Load all the tasks that are defined in the 'gulp' folder.  For now this is
// manual, but this mechanism could be enhanced into a plugin that load all
// tasks defined in the 'gulp' sub-folder
//
['clean','copy','connect','jade','styles','watch'].forEach( function(taskName) {
	require('./gulp/'+taskName)(gulp, cfg);
});

//
// Process all assets for development
//
gulp.task('compile', ['styles', 'jade']);

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
