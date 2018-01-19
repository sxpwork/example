<template>
 <!--文章主要信息-->
       <div class="detail">
            <div class="top">
              {{item.title}}
            </div>
            <div class="ms">
                <img :src="imgurl"/>{{item.author}}
                <span class="time">{{item.time}}</span>
            </div>
            <div class="matter">
      <!--        {{item.content}}  -->
            针对外网的跨域，即在本地(localhost) / 你的站点 中，想获取外部的数据，一般为其他的开放API。如google map api，但此时的数据与 你的站点不属于同源，当进行请求时，浏览器则会提示across origin error。 随着html5的诞生，W3C也开始考虑对跨域的请求方式进行规范。
            <br>
            1. XMLHttpRequest Level 2（简称XHR） —— 新版本的http(s)通信方式

由于老版本XHR收到同源策略限制，只能向同一域名的服务器请求数据。 因此新版本，针对老版本的缺点，做了改进，支持 跨域请求。 但前提是浏览器必须支持这个功能，而且服务器端必须同意这种”跨域”（Access-Control-Allow-Origin设置）。如果能够满足上面的条件，则代码的写法与不跨域的请求完全一样。

新版XHR中，新增了xhr.responseType,xhr.response属性，可以告诉浏览器，请求后返回什么格式的数据，使我们可以更方便的抓取二进制blob形式的文件。详情可参考XMLHttpRequest2 新技巧。
<br>
2. JSONP —— 新型的简单的解决方法

JSONP可以克服 XMLHttpRequest 的同源限制，简单的获取到不同源的数据。 原理很简单，就是script标签 + callback 。（因为 script 并不受同源限制的影响）
<br>
3. 利用Chrome 插件解决跨域 —— 无需借助服务器声明，无障碍跨域

如果我不想这么麻烦，我只想批量抓取外网的一些数据结果，是否有简单的方法呢？

当然，目前Chrome扩展中为了方便插件获取不同域的数据，提供了解决方法。 即只需在manifest.json文件中的“permission”中声明，再用xmlhttpRequest即可。详情可参考Chrome扩展开发手册
  

            </div>
       </div>
</template>
<script>
  // import bus from '../assets/eventBus';
  export default {
    data () {
      return {
       imgurl:"../../src/assets/image/girl.png",
       section:{},
       id:this.$route.params.id,
       item:{id:1,title:'前端跨域问题解决方法集锦',author:'夏末秋至',time:'2018-01-17',
               content:'这是最新资讯'}
      }
    },
  
    components: {
     
    },
    created(){

    },
    mounted(){
    // var self=this;

        // bus.$on('transmit',function(id){
        //       self.id=id;

        // });
        //console.log(id);
       
    },
    methods:{
      t:function()
      {

      }
    }

  };
</script>
<style type="text/css">
   .detail {padding:0px 10px;float: left;width: 600px;background: rgba(255,255,255,0.3);}
   .detail  .top{line-height: 60px;font-size: 20px;text-align: center;font-weight: bold;}
   .detail .ms{font-size: 12px;text-align: center;}
  .detail .ms .time{padding: 0 10px;}
   .detail .ms img{width: 20px;height: 20px;vertical-align: middle;margin-right: 10px;}
 .detail .matter{text-indent: 20px;margin:10px 5px;line-height: 30px;}
</style>
