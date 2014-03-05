//
// clean
//
module.exports = {
	dist: {
		files: [{
			dot: true,
			src: [
				'<%=  dir.tmp %>',
				'<%=  dir.dist %>'
			]
		}]
	},
	server: '.tmp'
}
