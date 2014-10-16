'use strict';

var gulp = require('gulp'),
  path = require('path'),
	cfg  = require('config');

// see config/default.js for the base configuration;
// default.js is overridable via the standard 'config' mechanism.

cfg.pkg     = require('./package.json');
cfg.plugins = require('gulp-load-plugins')();

/*
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
	fileset: {
		jade:  path.join(src,'**','*.jade')
	},
	pkg:     pkg,
  plugins: plugins
}; 
*/

//
// Load all the tasks that are defined in the 'gulp' folder.  For now this is
// manual, but this mechanism could be enhanced into a plugin that load all
// tasks defined in the 'gulp' sub-folder
//
['clean','copy','connect','jade','scripts','styles','watch'].forEach( function(taskName) {
	require('./gulp/'+taskName)(gulp, cfg);
});

//
// Process all assets for development
//
gulp.task('build', ['styles','jade','scripts','copy']);

//
// Does a clean dev build 
//
// this ensures that 'clean' is run before build; otherwise, 
// both tasks run concurrently and errors may occur
//
gulp.task('build:clean', ['clean'], function() {
	gulp.start('build');
});


//
// Builds and runs a server without reloading or opening a browser window,
// useful if you want to build via the command line and don't want to keep
// closing new browser windows, or reloading on every change
//
gulp.task('serve', ['build:clean'], function() {
	gulp.start('connect');
});

// Alias for 'serve'
gulp.task('server',['serve']);

//
// Builds and runs from the dist folder only, to smoketest packaged app
//
gulp.task('serve:dist', ['build:clean'], function() {
	gulp.start('connect-dist');
});


// Simply build by default
gulp.task('default', ['build:clean']);
