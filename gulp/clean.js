//
// Clean
//
module.exports = function(gulp, cfg) {
	
	gulp.task('clean', function () {
		return gulp.src([
			cfg.dir.dist + '/**/*'
		], {read: false})
		.pipe(cfg.plugins.clean());
	});

};

