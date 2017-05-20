import Vue from 'vue'
import Router from 'vue-router'
import admin from '@/components/admin/Index'
import adminLogin from '@/components/admin/Login'
import adminSetting from '@/components/admin/Setting'
import adminArticleClass from '@/components/admin/ArticleClass'

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
        { path: '/setting'  , component: adminSetting },
        { path: '/articleClass'  , component: adminArticleClass }
      ]
    }
  ]
})
