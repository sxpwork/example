// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/action.js'
import vueresource from 'vue-resource'
import iView from 'iview'
import './theme/index.less'
import '../src/assets/css/common.css'
import 'iview/dist/styles/iview.css'

window.bus=new Vue()
Vue.config.productionTip = false
 Vue.use(iView);
Vue.use(vueresource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
 store,
   render: h => h(App),
})
