// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import URL from '@/config.js'
// import request from 'superagent'

//导入状态管理工具
import store from './store'
Vue.config.productionTip = false

import 'mint-ui/lib/style.min.css';
import mintui from 'mint-ui';
Vue.use(mintui);
import './assets/css/reset.css';
import './assets/css/global.css';

// router.beforeEach((to, from, next) => {
//    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//        if (localStorage.getItem('token')) { // 通过vuex state获取当前的token是否存在
//            next();
//        } else {
//            next({
//                path: '/login',
//                query: {
//                    redirect: to.fullPath
//                } // 将跳转的路由path作为参数，登录成功后跳转到该路由
//            })
//        }
//    } else {
//        next();
//    }
// })

import Icon from 'vue-awesome'
Vue.component('icon', Icon)

Vue.filter('date',function(res){
	if(res){
		return res.slice(0,10)
	}
})
import T from '@/util/index.js'
Vue.filter('newDate',function(res){
	if(res){
		return T.format(new Date(res))
	}
})
Vue.filter('hide',function(res){
	if(res){
		return "*" + res.slice(1)
	}
})
Vue.filter('sex',function(res){
	if(res){
		return res==="M"?'男':"女"
	}
});
// request
// 	.post(URL + 'param')
// 	.set("Content-Type", "application/json")
// 	.set("Authorization", "Bearer " + localStorage.getItem('token'))
// 	.send(JSON.stringify({url:encodeURIComponent(location.href.split('#')[0])}))
// 	.then(res => {
// 	console.log(wx)
// 		if(res.body){
// 		var data = res.body;
// 			wx.config({
// 				debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
// 				appId: data.appid, // 必填，公众号的唯一标识
// 				timestamp:data.timestamp , // 必填，生成签名的时间戳
// 				nonceStr: data.noncestr, // 必填，生成签名的随机串
// 				signature: data.signature,// 必填，签名，见附录1
// 				jsApiList: ['chooseImage','uploadImage','downloadImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
// 			});
// 			wx.ready(function(){
// 				//判断当前客户端版本是否支持指定JS接口
// 				wx.checkJsApi({
// 					jsApiList: ['chooseImage', 'uploadImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
// 					success: function(res) {
// 						// 以键值对的形式返回，可用的api值true，不可用为false
// 						// 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
// 						if(!res["checkResult"]["chooseImage"]) {
// 							alert("当前客户端不支持上传图片");
// 						}
// 					}
// 				});
// 			});
// 		}
// 	}).catch(err=>{
// 			console.dir(err);
// 			if(err.status == 500){
// 				alert('网络错误')
// 			}
// 		})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
   render: h => h(App)
})
