import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import University from '@/components/University'

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
    }
  ]
})
