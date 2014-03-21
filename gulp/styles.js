'use strict';
//
// styles
//
module.exports = function(gulp, cfg) {

	gulp.task('styles', function() {

		var lessOpts = {
			paths: [cfg.dir.bower] // search for imports here; less will use to reference a library simply and relatively in less files
		};

		var recessOpts = {
			includePath: [cfg.dir.bower] // search for imports here
			//
			// Uncomment these options if you want recess to issue less warnings;
			// in particular, the strictPropertyOrder is a twitter convention that can
			// be quite verbose if applied to a stylesheet that was not authored with
			// this convention
			//
			// ,strictPropertyOrder:  false,  // do not complain about properties out of order
			// noOverqualifying:     false, // do not complain about overqualifying selectors div#foo.bar
			// zeroUnits:            false, // do not complain about adding units to values of 0
			// noUniversalSelectors: false  // do not complain about using the universal * selector
		};

		gulp.src(cfg.dir.css + '/index.less')
			.pipe(cfg.plugins.recess(recessOpts).on('error', console.log))
			.pipe(cfg.plugins.less(lessOpts))

			// name destination file with the 'name' attribute in the package.json file
			.pipe(cfg.plugins.concat(cfg.pkg.name + '.css'))

			.pipe(gulp.dest(cfg.dir.dist))
			.pipe(cfg.plugins.size());
	});
};
