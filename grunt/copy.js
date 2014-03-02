//
// copy
//
module.exports = {
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
