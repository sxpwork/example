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
import {getartlist} from '../services/services'
  export default {
    data () {
      return {
       imgurl:"../../src/assets/image/girl.png",
       items:[]
      }
    },
  
    components: {
     
    },
    created(){

    this.getList();
    },
    methods:{
      detailId:function(id){
         // console.log(id);
          this.$router.push({path:'/detail/'+id});
          //bus.$emit('transmit',id)
      },
      getList(){
       var self=this;
          getartlist().then((res)=>{
    
           self.items= JSON.parse(JSON.stringify(res.data));
           console.log( self.items);
          }).catch((err)=>{
                console.log("fail"+err);
          });
         
            // var self=this;
            // this.$http.get("../src/data/artData.json").then((res)=>{
            //     var data=res.bodyText;
            //     var result=JSON.parse(res.bodyText);
            //       self.items=result.data;
            //   console.log(result);
            //  }).catch((res)=>{
            //      console.log("出错了");
            //  })
    }
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
