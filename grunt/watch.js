//
// watch
//
module.exports = {
	// js: {
	// 	files: ['<%= dir.src %>/<%= dir.js %>/**/*.js'],
	// 	options: {
	// 		livereload: true
	// 	}
	// },
	styles: {
		files: ['<%= dir.src %>/<%= dir.css %>/**/*.css'],
		tasks: ['newer:copy:styles']
	},
	livereload: {
		options: {
			livereload: true
		},
		files: [
			'<%= dir.src %>/*.html',
			'<%= dir.tmp %>/<%= dir.css %>/**/*.css',
			'<%= dir.src %>/<%= dir.img %>/**/*.{gif,jpg,png,svg,webp}'
		]
	}
};
