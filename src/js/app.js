// App entry point
'use strict'

import Vue from 'vue'
import App from './App.vue'
import jnxComponents from 'Common/components'
import Router from 'vue-router'
import appRouter from './router'

Vue.use(Router)
Vue.use(jnxComponents)

Vue.config.productionTip = false

export const app = new Vue({
	el: '#app',
	router: appRouter,
	components: { App },
	template: '<App/>'
})

window.vue = app
