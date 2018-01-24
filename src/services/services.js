import {axiosEg} from '../config/axios.js'


const artListUrl='../src/data/artData.json';


const artList=axiosEg(artListUrl,{},'get');
function getartlist()
{
	return artList;
}

export  {getartlist}

// import axios from 'axios'
// import qs from 'qs'

// // axios 配置
// axios.defaults.timeout = 5000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://192.168.1.120:8080/arbmanager';

// //POST传参序列化
// axios.interceptors.request.use((config) => {
//   if(config.method  === 'post'){
//     config.data = qs.stringify(config.data);
//   }
//   return config;
// },(error) =>{
//  console.log('错误参数')
//   return Promise.reject(error);
// });

// //返回状态判断
// axios.interceptors.response.use((res) =>{
//   if(!res.data.success){
//     // _.toast(res.data.msg);
//     return Promise.reject(res);
//   }
//   return res;
// }, (error) => {
//   console.log('错误')
//   return Promise.reject(error);
// });

// export function fetch(url, params) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, params)
//       .then(response => {
//         resolve(response.data);
//       }, err => {
//         reject(err);
//       })
//       .catch((error) => {
//         reject(error)
//       })
//   })
// }

// export default {
//   /**
//    * 用户登录
//    */
//   Login(params) {
//     return fetch('/logindo.htm', params)
//   },
//   
//   loginBtn(){
//             let data = {
//               'loginName': this.email,
//               'loginPwd': this.password
//             }
//             api.Login(data)
//               .then(res => {
//                  let newData= JSON.parse(pako.inflate(res.data, { to: 'string' 
//                  }));
//                  console.log(res)
//                  console.log(newData)
//                 //这里then应该是回调成功之后的函数才对 上面的pako只是一个解密js的一个插件
//               })
//               .catch(error => {
//               //但是现在是catch回调成功在做相应的操作了，比如说判断用户名正确与否这个应该是then里面做的事情才对
// //                this.$router.push({path:'/home'})
// //                let newData= JSON.parse(pako.inflate(error.data, { to: 'string' }));
// //                console.log(newData)
//               })