'use strict';

var path = require('path');

var cfg = {
	dir: {
		src:     'src',
		bower:   'src/bower',
		css:     'css',
		dist:    'dist',
		img:     'img',
		js:      'js',
		partial: 'view',
		test:    'test'
	},
	fileset: {},
}; 

// the jade files to watch
cfg.fileset.jade = path.join(cfg.dir.src,'**','*.jade');

// the jade 'top-level' files that will be turned into html, excludes partials;
// relative to src folder
cfg.fileset.html = [
	path.join('**','*.jade'),
	path.join('!**',cfg.dir.partial,'*')
]

cfg.fileset.js = path.join(cfg.dir.src, cfg.dir.js, '**','*.js');

// files watched during the build
cfg.fileset.watch = [
	// path.join(cfg.dir.dist,'*.html'),
	cfg.fileset.jade,
	cfg.fileset.js,
	path.join(cfg.dir.src, cfg.dir.css,'**','*.css'),
	path.join(cfg.dir.src, cfg.dir.css,'**','*.less'),
	path.join(cfg.dir.src, cfg.dir.img,'**','*')
]

// these are relative to the 'src' folder, and get copied to the dist folder
cfg.fileset.assets = [
	'favicon.ico',
	path.join(cfg.dir.img,'**','*.*'),
	path.join(cfg.dir.js, '**','*.*'),
	path.join(cfg.dir.css,'font','**','*.*'),
	path.join(cfg.dir.css,'icon','**','*.*'),
	path.join('!**','*.less') 
];

cfg.fileset.less = [
	'typography.less',
	'util.less',
	'layout.less',
	'responsive.less'
];

// any css libs that need to be copied to the dist/css folder
cfg.fileset.cssLibs = [
	path.join(cfg.dir.bower,'normalize.css', 'normalize.css')
];

// any javascript libs that need to be copied to dist/js
cfg.fileset.jsLibs = [
	path.join(cfg.dir.bower, 'jquery', 'dist', 'jquery.js')
];

cfg.jade = {
	debug:  false,
	pretty: true
};

cfg.jshint = {
	rcfile:   '.jshintrc',
	reporter: 'default'
}

// the connect or other server config
cfg.server = {
	root: [cfg.dir.src, cfg.dir.dist],
	port: 9000,
	host: '0.0.0.0',
	open: false,
	livereload: false
};


module.exports = cfg;