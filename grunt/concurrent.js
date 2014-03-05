//
// concurrent: runs tasks in parallel to speed build
//
module.exports = {
	server: [
		'copy:styles'
	],
	test: [
		'copy:styles'
	],
	dist: [
		'copy:styles'
	],
}
