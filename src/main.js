// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import globals from './components/common/globals'

Vue.use(ElementUI);
Vue.use(globals);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

axios.defaults.baseURL = Vue.prototype.SERVERURL;
axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
