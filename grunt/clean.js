//
// clean
//
module.exports = {
	dist: {
		files: [{
			dot: true,
			src: [
				'<%=  dir.tmp %>',
				'<%=  dir.dist %>/*',
				'!<%= dir.dist %>/*.git'
			]
		}]
	},
	server: '.tmp'
}
