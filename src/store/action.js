import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
 const store =new Vuex.Store({
 	state:{
 		count:0,
 		username:"游客"
 	},
 	mutations:{
 		increment(state)
       {
       	state.count++;
       },
       checkLogin(state,username)
       {
       	state.username=username;
       }


 	},
 	getters:{
 			
 	},
 	actions:{
 			increAction(context)
 			{
 				context.commit("increment");
 			},
 			checklgActiob(context,username)
 			{
 				context.commit("checkLogin",username);
 			}
 	}


 });
 export default store;