<template>
  <div id="index">
    
  
      <div class="banner">
            <search></search>
            <Vmenu v-on:getMenu="changeMenu"></Vmenu>

            <a href="" class="login">登录</a>
      </div>
  <div class="middle">

  <div class="content">
    <router-view></router-view>
  </div>

  <div class="rtcon">
          <!--登录界面-->
          <div class="loginPanel" v-if="isLogin">
              <div class="username line">
                  <img src="../src/assets/image/name.png"/>
                  <input type="text" class="inpName " placeholder="请输入用户名" v-model="username"/>
              </div>
              <div class="pwd line">
                   <img src="../src/assets/image/pwd.png"/>
                  <input type="password" class="inpPwd" v-model="pwd" placeholder="密码"/>
              </div>
              <a href="javascript:void" class="enterBtn" @click="login">登录</a>

          </div>
          <div v-else>
              欢迎你，{{username}}
          </div>
            <!--tab切换-->
            <div class="infoTabs"> 
                  <span v-for="(item,index) in  tabs" :class="{active:tabnum==index}" class="tabs" @click="changeTabs(index)">
                      {{item.name}}
                  </span>
                  <ul class="tabList">
                      <li v-for="(i,index) in list">
                        {{i.title}}
                      </li>
                  </ul>

            </div>
         <!--tab切换-->
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
          isLogin:true,
          username:'',
          pwd:'',
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
    this.$router.push({path:'/find'})
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
    },
    login:function(){
       isLogin=false;

    }
  }


}
</script>

<style scoped>
    #index{background:rgba(232,65,104,0.2);height: 100%;background-size: cover;}
    .middle{width: 900px;margin:0 auto;background: rgba(255,255,255,0.2);text-align: left;padding-top: 5px;}
    .banner{background: #fff;}
    .middle .leftmenu{width: 150px;font-size: 16px;text-align: center;cursor: pointer;float: left;}
    .middle .leftmenu li{line-height: 40px;}
    .middle .leftmenu li:hover{background: rgba(255,255,255,0.5);}
    .content{width: 500px;display: inline-block;margin-top: 0px;}
    .rtcon{background: rgba(255,255,255,0.2);margin-left: 30px; float: right;}
    .login{height: 50px;line-height: 50px;display: inline-block;margin-left: 100px;color: #8a8a8a;}
    .infoTabs{width:100%;background-color:rgba(255,255,255,0.4);overflow: hidden;}
    .infoTabs span.tabs{padding:5px 15px;color: #333;}
    .infoTabs .active{background: rgba(255,255,255,0.5);}
    .tabList{margin-top:10px;}
    .tabList li{padding: 10px 20px;text-align:center;}
    .loginPanel{width: 240px;height: 240px;background-color:rgba(255,255,255,0.4);padding: 20px 20px;box-sizing:border-box;margin-bottom: 20px;}
    .loginPanel img{width: 22px;height: 22px;display: inline-block;vertical-align: middle;margin-top: -2px;margin-right: 5px;}
    .loginPanel .line{padding:5px 10px;border:1px solid #8a8a8a;height: 25px; border-radius: 5px;margin-bottom: 10px;}
    .loginPanel .line input{height: 25px;width: 140px;}
    .enterBtn{background:#e84168;color: #fff;display: block;line-height: 30px;margin: 20px auto 0 auto;width: 200px;border-radius: 5px; text-align:center; }
</style>
