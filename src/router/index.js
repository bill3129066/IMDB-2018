import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import University from '@/components/University'
import University_new from '@/components/University_new'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
	{
      path: '/university',
      name: 'university',
      component: University
    },
	{
      path: '/university/new',
      name: 'university_new',
      component: University_new
    }
  ]
})
