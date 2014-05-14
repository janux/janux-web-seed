'use strict';
//
// jade
// compiles jade templates into html
//

module.exports = function(gulp, cfg) {

	var path = require('path');
	//
	// you can pass data that will be available in the templates here,
	// for example, a version number, or a dev/prod flag
	//
	var data = {someVar: 'hello World'};
	
	gulp.task('jade', function() {
		gulp.src(
			[
				'**/*.jade',
				'!**/include/*',
				'!zTrash/**/*'
			], {
				cwd:  cfg.dir.src,
				base: cfg.dir.src + path.sep
			}
		)
		.pipe(cfg.plugins.jade({
				data:   data,
				debug:  false,
				pretty: true
			}).on('error', function(err){})) // prevent watch from being interrupted
		.pipe(gulp.dest(cfg.dir.dist));
	});
};
