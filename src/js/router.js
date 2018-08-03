'use strict'

import Router from 'vue-router'
import boostrapSample from './boostrap-sample.vue'
import styleguide from './styleguide.vue'
import sandbox from './sandbox.vue'
import entypoIcons from './entypo-icons.vue'

const appRoutes = [
	{
		path: '/',
		name: 'Main',
		redirect: {
			name: 'boostrapSample'
		}
	},
	{
		path: '/boostrap-sample',
		name: 'boostrapSample',
		component: boostrapSample
	},
	{
		path: '/entypo-icons',
		name: 'entypoIcons',
		component: entypoIcons
	},
	{
		path: '/sandbox',
		name: 'sandbox',
		component: sandbox
	},
	{
		path: '/styleguide',
		name: 'styleguide',
		component: styleguide
	}
]

const appRouter = new Router({ routes: appRoutes })

export default appRouter
