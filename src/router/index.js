import Vue from 'vue'
import rt from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import menu from '../components/menu'
import index from '../index.vue'

Vue.use(rt)

export default new rt({
  routes: [
    {
      path: '/',
      component: index
    },
    {
    	path:'/menu',
    	component:menu
    }
  ],mode:'history'
})
