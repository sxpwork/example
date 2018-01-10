import Vue from 'vue'
import rt from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import menu from '../components/menu'

Vue.use(rt)

export default new rt({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
    	path:'/menu',
    	component:menu
    }
  ],mode:'history'
})
