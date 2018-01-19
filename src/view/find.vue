<template>
 <!--发现新咨询-->
       <ul class="atcList">
          <li v-for="(item,index) in items" >
             <a href="javascript:void" @click="detailId(item.id)">
                    <p class="title">
                     <img :src="imgurl" class="headImg"/>
                    {{item.title}}</p>
                    <p class="author">
                      <span>{{item.author}}</span>
                      <span>{{item.time}}</span>
                    </p>
                    <p class="cot">
                      {{item.content}}
                    </p>
              </a>
          </li>

          
        </ul>

</template>
<script>
  export default {
    data () {
      return {
       imgurl:"../../src/assets/image/girl.png",
       items:[{id:1,title:'前端跨域问题解决方法集锦',author:'夏末秋至',time:'2018-01-17',
               content:'这是最新资讯'},
              {id:2,title:'浏览器常见兼容问题',author:'张小猪',time:'2018-01-17',
               content:'火狐 谷歌 等等'}, {id:3,title:'浏览器常见兼容问题',author:'张小猪',time:'2018-01-17',
               content:'火狐 谷歌 等等'}, {id:4,title:'浏览器常见兼容问题',author:'张小猪',time:'2018-01-17',
               content:'火狐 谷歌 等等'}]
      }
    },
  
    components: {
     
    },
    methods:{
      detailId:function(id){
         // console.log(id);
          this.$router.push({path:'/detail/'+id});
          //bus.$emit('transmit',id)
      },
    }
  };
</script>
<style type="text/css">
   .atcList {padding:0px 10px;float: left;width: 600px;}
   .atcList li{margin-bottom: 20px;background: rgba(255,255,255,0.3);border-radius: 3px ;padding:10px;}
    .atcList li .title{font-size: 20px;color: #333;font-family: "microsoft yahei";}
    .atcList .headImg{height: 25px;width: 25px;border-radius: 50%;float: left;margin-right: 5px;}
    .atcList .author{font-size:14px; line-height: 30px;}
    .atcList .cot{padding: 5px 0px;height: 142px;overflow: hidden;font-family: "microsoft yahei";word-break:keep-all;}
</style>
