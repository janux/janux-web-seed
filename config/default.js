'use strict';

var path = require('path');

var cfg = {
	dir: {
		src:     'src',
		bower:   'bower',
		css:     'css',
		dist:    'dist',
		img:     'img',
		js:      'js',
		partial: 'view',
		test:    'test'
	},
	file: {
		app: 'app.js'
	},
	fileset: {},
	build: {
		// Template for index.html
		index: path.resolve(__dirname, '../dist/index.html'),

		// Paths
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',

		/**
		 * Source Maps
		 */

		productionSourceMap: true,
		// https://webpack.js.org/configuration/devtool/#production
		devtool: '#source-map',

		// Gzip off by default as many popular static hosts such as
		// Surge or Netlify already gzip all static assets for you.
		// Before setting to `true`, make sure to:
		// npm install --save-dev compression-webpack-plugin
		productionGzip: false,
		productionGzipExtensions: ['js', 'css'],

		// Run the build command with an extra argument to
		// View the bundle analyzer report after build finishes:
		// `npm run build --report`
		// Set to `true` or `false` to always turn it on or off
		bundleAnalyzerReport: process.env.npm_config_report
	},
	dev: {
		// Paths
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {},

		// Use Eslint Loader?
		// If true, your code will be linted during bundling and
		// linting errors and warnings will be shown in the console.
		useEslint: true,
		// If true, eslint errors and warnings will also be shown in the error overlay
		// in the browser.
		showEslintErrorsInOverlay: false,

		/**
		 * Source Maps
		 */

		// https://webpack.js.org/configuration/devtool/#development
		devtool: 'cheap-module-eval-source-map',

		// If you have problems debugging vue-files in devtools,
		// set this to false - it *may* help
		// https://vue-loader.vuejs.org/en/options.html#cachebusting
		cacheBusting: true,

		cssSourceMap: true
	}
};

// the pug files to watch
cfg.fileset.pug = path.join(cfg.dir.src,'**','*.pug');

// the pug 'top-level' files that will be turned into html, excludes partials;
// relative to src folder
cfg.fileset.html = [
	path.join('**','*.pug'),
	path.join('!**',cfg.dir.partial,'*')
];

cfg.fileset.js = [
	path.join(cfg.dir.src, cfg.dir.js, '**','*.js'),
	path.join(cfg.dir.src, cfg.dir.js, '**','*.vue')
];

// files watched during the build
cfg.fileset.watch = [
	// path.join(cfg.dir.dist,'*.html'),
	cfg.fileset.pug,
	cfg.fileset.js,
	path.join(cfg.dir.src, cfg.dir.css,'**','*.css'),
	path.join(cfg.dir.src, cfg.dir.css,'**','*.less'),
	path.join(cfg.dir.src, cfg.dir.img,'**','*')
];

// these are relative to the 'src' folder, and get copied to the dist folder
cfg.fileset.assets = [
	'favicon.ico',
	path.join(cfg.dir.img,'**','*.*'),
	// path.join(cfg.dir.js, '**','*.*'),
	path.join(cfg.dir.css,'font','**','*.*'),
	path.join(cfg.dir.css,'icon','**','*.*'),
	path.join('!**','*.less')
];

// The 'target' less files that will be transformed into corresponding css files;
// included files are not in this set, and for 'watch' task we need all less files
cfg.fileset.less = [
	'responsive.less',
	'layout.less',
	'main.less'
];

// all less sources, used for 'watch' task
cfg.fileset.lessSrc = path.join(cfg.dir.src, cfg.dir.css, '*.less');

// any css libs that need to be copied to the dist/css folder
cfg.fileset.cssLibs = [
	//path.join(cfg.dir.bower,'normalize.css', 'normalize.css')
];

// any javascript libs that need to be copied to dist/js
cfg.fileset.jsLibs = [
	path.join(cfg.dir.bower, 'jquery', 'dist', 'jquery.js')
];

cfg.pug = {
	debug:  false,
	pretty: true
};

// the connect or other server config
cfg.server = {
	root: [cfg.dir.src, cfg.dir.dist],
	port: 9000,
	host: '0.0.0.0',
	open: false,
	livereload: false
};


module.exports = cfg;
