//
// copy
//
module.exports = {
	styles: {
		expand: true,
		dot: true,
		cwd:  '<%= dir.src %>/<%= dir.css %>',
		dest: '<%= dir.tmp %>/<%= dir.css %>',
		src:  ['**/*.css', 'font/**/*.*']
	},
	dist: {
		files: [{
			expand: true,
			dot: true,
			cwd:  '<%= dir.src %>',
			dest: '<%= dir.dist %>',
			src: [
				'*.{ico,png,txt}',
				'.htaccess',
				'img/{,*/}*.webp',
				'{,*/}*.html',
				'css/font/{,*/}*.*'
			]
		}]
	}
}
