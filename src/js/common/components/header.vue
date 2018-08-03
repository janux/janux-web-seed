/**
* Project janux-vuejs-seed
* Created by hielo on 2018-05-08
*/

<template lang="pug">
div
	header
		.logo
			img(src='img/janux-sage-256.png')
			.branding
				span.janux janux
				span.people people

		.auth

			.auth-status Logout
				span.entypo.entypo-logout

			.auth-user Philippe Paravicini &nbsp;
				span.entypo.entypo-down-open
	nav
		ul
			li.first: a(href='#accounts') Accounts
			li: a(href='#roles') Roles
			li: a(href='#perms') Permissions
</template>

<script>
export default {
	name: 'jnx-header'
}
</script>
