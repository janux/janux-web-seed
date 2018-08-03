<template lang="pug">
	section.sidebar
		p
			ul
				li: router-link(to="boostrap-sample") Bootstrap Styleguide
				li: router-link(to="styleguide") Janux Styleguide
				li: router-link(to="entypo-icons") Entypo Icons
				li: router-link(to="sandbox") Sandbox
</template>

<script>
export default {
	name: 'jnx-sidenav'
}
</script>
