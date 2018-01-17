<template>
  <div id="index">
    
  
  <div class="banner">
    <search></search>
    <Vmenu ></Vmenu>
  </div>
  <div class="middle">
   <!--  <leftmenu></leftmenu> -->
    
    <ul class="leftmenu">
        <li>首页</li>
        <li>最新资讯</li>
        <li>最热话题</li>
        <li>最新评论</li>
    </ul>

    <div class="content">
        <ul class="atcList">
          <li>
             <a href="">
                    <p class="title">
                     <img src="../src/assets/image/girl.png" class="headImg"/>
                    前端跨域问题解决方法集锦</p>
                    <p class="author">
                      <span>夏末秋至</span>
                      <span>2018-01-17</span>
                    </p>
                    <p class="cot">
                      三种方案

                   1. XMLHttpRequest Level 2（简称XHR） —— 新版本的http(s)通信方式
                   2. JSONP —— 新型的简单的解决方法

      JSONP可以克服 XMLHttpRequest 的同源限制，简单的获取到不同源的数据。 原理很简单，就是script标签 + callback 。（因为 script 并不受同源限制的影响）
                  3. 利用Chrome 插件解决跨域 —— 无需借助服务器声明，无障碍跨域

      如果我不想这么麻烦，我只想批量抓取外网的一些数据结果，是否有简单的方法呢？

      当然，目前Chrome扩展中为了方便插件获取不同域的数据，提供了解决方法。 即只需在manifest.json文件中的“permission”中声明，再用xmlhttpRequest即可。详情可参考Chrome扩展开发手册
      参考网址：http://hectorguo.com/zh/cross-origin-solve/
                    </p>
              </a>
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
          leftmenu:[{title:"首页"},{title:"最新资讯"},{title:"最热话题"},{title:"最新评论"}]
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
    .atcList {padding:5px 10px;}
    .atcList li{margin-bottom: 20px;background: #fff;border-radius: 3px ;padding:5px 10px;}
    .atcList li .title{font-size: 20px;color: #333;font-family: "microsoft yahei";}
    .atcList .headImg{height: 25px;width: 25px;border-radius: 50%;float: left;margin-right: 5px;}
    .atcList .author{font-size:14px; line-height: 30px;}
    .atcList .cot{padding: 5px 0px;height: 142px;overflow: hidden;font-family: "microsoft yahei";word-break:keep-all;}
</style>
