'use strict';

var path = require('path');

require('load-grunt-tasks');

module.exports = function (grunt) {
	// show elapsed time at the end
	require('time-grunt')(grunt);

	// load-grunt-config makes it possible to break Gruntfile by task
	require('load-grunt-config')(grunt, {
		configPath: path.join(process.cwd(), 'grunt'), // the default
		init: true,
		config: {
			dir: {
				css:  'css',
				dist: 'dist',
				img:  'img',
				src:  'src',
				tmp: '.tmp',
				test: 'test',
			}
		},
		loadGruntTasks: {
			pattern: 'grunt-*',
			scope:   'devDependencies'
		}
	});

	//
	// public tasks
	//
	// If these get too long, they can also be split in separate files
	// grunt.loadTasks('grunt');
	
	grunt.registerTask('compile', 'placeholder for asset processing', function() {
		grunt.log.writeln('compiling assets...');
		grunt.task.run(['copy:dist']);
	});
	
	grunt.registerTask('build', 'cleans, checks syntax, and concats assets', [
		'clean:dist',
		'compile'
	]);

	grunt.registerTask('serve', 'serves site locally without packaging it', [
		'clean:server',
		'concurrent:server',
		'connect:livereload',
		'watch'
	]);

	// 'connect:livereload:keepalive' // if calling connect last (without watch)

	grunt.registerTask('default', 'runs build for now', ['build']);

};
