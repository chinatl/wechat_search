// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
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
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
   render: h => h(App)
})
