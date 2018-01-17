import vue from 'vue'
import vuex from 'vuex'
Vue.use(vuexs)
 const store =new Vuex.Store({
 	state:{
 		count:0,
 		list:[{id:1,text:'...',done:true},{id:2,text:'我是第二个id',done:false}]
 	},
 	mutations:{
 		increment(state)
       {
       	state.count++;
       },


 	},
 	getters:{
 			tod:(state)=>return state.list.filter(todo=>todo.done),
 			todcount:(state,getters)=>return getters.tod.length
 	}

 })