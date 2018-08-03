'use strict';
//
// lints javascript files
//

var path = require('path'),
	webpack 	= require('webpack'),
	webpackStream = require('webpack-stream'),
	webpackConfig = require('../build/webpack.dev.conf.js');

module.exports = function(gulp) {
	var cfg = gulp.cfg;

	gulp.task('scripts', function() {
		console.log('linting js files...');
		gulp.src(cfg.fileset.js)
			.pipe(gulp.plugins.eslint(cfg.eslint));
			// .pipe(gulp.plugins.eslint.formatEach('compact', process.stderr));
	});

	var appFile = '.' + path.sep + path.join(cfg.dir.src, cfg.dir.js, cfg.file.app);

	gulp.task('webpack', function() {
		console.log('bundling app...');
		return gulp.src(appFile)
			.pipe(webpackStream(webpackConfig), webpack)
			.pipe(gulp.dest(cfg.dir.dist));

	});
};
