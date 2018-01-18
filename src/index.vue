<template>
  <div id="index">
    
  
  <div class="banner">
    <search></search>
    <Vmenu v-on:getMenu="changeMenu"></Vmenu>

    <a href="" class="login">登录</a>
  </div>
  <div class="middle">

    
    <ul class="leftmenu">
        <li>首页</li>
        <li>最新资讯</li>
        <li>最热话题</li>
        <li>最新评论</li>
    </ul>

  <div class="content">
    <router-view></router-view>
  </div>

    <div class="infoTabs"> 
          <span v-for="(item,index) in  tabs" :class="{active:tabnum==index}" class="tabs" @click="changeTabs(index)">
              {{item.name}}
          </span>
          <ul class="tabList">
              <li v-for="(i ,index) in list">
                {{i.title}}
              </li>
          </ul>

    </div>

  </div>
   

  </div>
</template>

<script>
import Vmenu from './components/menu.vue'
import search from './components/search.vue'
import leftmenu from './components/leftmenu.vue'
export default {
  components:{Vmenu,search,leftmenu},
  data(){
    return {
          leftmenu:[{title:"首页"},{title:"最新资讯"},{title:"最热话题"},{title:"最新评论"}],
          tabs:[{name:'最新文章'},{name:'最新评论'}],
          tabnum:0,
          list:[],
          atlist:[{title:"最新文章1"},{title:"最新文章2"},{title:"最新文章3"},{title:"最新文章4"}],
          cmlist:[{title:"最新评论1"},{title:"最新评论2"},{title:"最新评论13"},{title:"最新评论14"}]
    }
  },
  created() {

   this.list=this.atlist;
  },
  methods:{
    changeMenu:function(name)
    {
      console.log("您选择的类目是`{name}`",name);
      this.$router.push({path:'/'+name})
    },
    changeTabs:function(index){
       this.tabnum=index;
        this.list=index==0?this.atlist:this.cmlist
    }
  }


}
</script>

<style scoped>
    #index{background: url('../src/assets/image/body.jpg') ;height: 100%;background-size: cover;}
    .middle{width: 900px;margin:0 auto;background: rgba(255,255,255,0.2);text-align: left;padding-top: 5px;}
    .banner{background: #fff;}

    .middle .leftmenu{width: 150px;font-size: 16px;text-align: center;cursor: pointer;float: left;}
    .middle .leftmenu li{line-height: 40px;}
    .middle .leftmenu li:hover{background: rgba(255,255,255,0.5);}
    .content{width: 500px;display: inline-block;margin-top: 0px;}
   
    .login{height: 50px;line-height: 50px;display: inline-block;margin-left: 100px;color: #8a8a8a;}
    .infoTabs{width: 200px;height: 450px; display: inline-block;background: rgba(255,255,255,0.2);margin-left: 30px;}
    .infoTabs .tabs{padding:5px 15px;color: #333;overflow: hidden;}
    .infoTabs .active{background: rgba(255,255,255,0.5);}
    .tabList{margin-top:10px;}
    .tabList li{padding: 10px 20px;text-align:center;}
</style>
