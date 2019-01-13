import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import University from '@/components/University'
import University_new from '@/components/University_new'
import University_view from '@/components/University_view'
import University_edit from '@/components/University_edit'
import Department from '@/components/Department'
import Department_new from '@/components/Department_new'
import Department_view from '@/components/Department_view'

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
    },
	{
      path: '/university/:U_ID',
      name: 'university_view',
      component: University_view
    },
	{
      path: '/university/edit/:U_ID',
      name: 'university_edit',
      component: University_edit
    },
	{
      path: '/department',
      name: 'department',
      component: Department
    },
	{
      path: '/department/new',
      name: 'department_new',
      component: Department_new
    },
	{
      path: '/department/:D_ID',
      name: 'department_view',
      component: Department_view
    }
  ]
})
