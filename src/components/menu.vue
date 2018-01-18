<template>
	<div class="v-menu">
			<ul>
				<li v-for="(item,index) in menuItem" @click="selectStyle(item,index)" :class="{active:item.active}">
					<img :src="imgUrl+item.srcS+'.png'" class="menuImg" v-show="item.active"/>
					<img :src="imgUrl+item.src+'.png'" class="menuImg" v-show="!item.active"/>
					{{item.text}}
				</li>
				
			</ul>
	</div>

</template>
<script type="text/javascript">
import Vue from 'vue'
	export default{
			data(){
				return {
					imgUrl:'../../src/assets/image/',
              	 menuItem:[{name:'',text:'首页',src:'home',srcS:'home1',active:true},
              	           {name:'find',text:'发现',src:'find',srcS:'find1',active:false},
              	           {name:'my',text:'我的',src:'my',srcS:'my1',active:false} ]
				}
			},
			methods:{
				selectStyle(item,index){
					for(var a of this.menuItem)
					{
						Vue.set(a,'active',false);
					}
					Vue.set(item,'active',true);
					this.$emit("getMenu",item.name);
				},
				
			}



	}


</script>
<style scoped>
	*{margin: 0;padding: 0;}
	.v-menu{height: 50px;margin-left: 50px;display: inline-block;}
	.v-menu ul li{display: inline-block;font-size: 14px;color: #fff;padding:0 20px;line-height:50px;color: #8a8a8a;cursor: pointer;}
	.menuImg{vertical-align:middle;width: 24px;height: 24px;margin-top: -4px;}
	.v-menu ul li.active {color:#e84168;}

</style>