import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Library from './views/Library';
import Lab from './views/Lab';
import LibWhat from './views/Lib/LibWhat';
import LibWhy from './views/Lib/LibWhy';
import LibHow from './views/Lib/LibHow';

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{ 
			path: '/library', 
			component: Library,
			name: 'Library',
			children: [
				{
					path: '/what',
					component: LibWhat
				},
				{
					path: '/why',
					component: LibWhy
				},
				{
					path: '/how',
					component: LibHow
				}

			]
		},
		{ 
			path: '/lab', 
			component: Lab,
			name: 'Lab' 
		}
	]
})
