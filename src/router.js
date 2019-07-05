import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Library from './views/Library';
import Lab from './views/Lab';

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{ 
			path: '/library', 
			component: Library ,
			children: []
		},
		{ 
			path: '/lab', 
			component: Lab 
		}
	]
})
