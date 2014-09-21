//
// Clean
//
var path = require('path');

module.exports = function(gulp, cfg) {
	
	gulp.task('clean', function () {
		return gulp.src([
			path.join(cfg.dir.dist,'*')
		], {read: false})
		.pipe(cfg.plugins.rimraf());
	});

};

