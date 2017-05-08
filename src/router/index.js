import Vue from 'vue'
import Router from 'vue-router'
import adminLogin from '@/components/admin/login'
import admin from '@/components/admin/index'
import adminSetting from '@/components/admin/setting'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/admin/login',
      component: adminLogin
    }, {
      path: '/admin',
      component: admin,
      children:[
        { path: '/setting'  , component: adminSetting }
      ]
    }
  ]
})
