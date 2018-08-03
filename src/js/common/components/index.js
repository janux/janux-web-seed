'use strict'

/**
 * Project janux-web-seed
 * Created by hielo on 2018-08-02
 */

import header from './header.vue'
import sidenav from './sidenav.vue'

function components (Vue, options) {
	// Structure
	Vue.component('v-jnx-header', header)
	Vue.component('v-jnx-sidenav', sidenav)
}

export default components
