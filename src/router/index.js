/*all app config router*/
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
/*封装一个快速导出路由的方法*/
import login from '../view/login'
import relogin from '../view/relogin'
import password from '../view/password'
import reset from '../view/reset'
import userpay from '../view/userpay'
import usersearch from '../view/usersearch'
import userinfo from '../view/userinfo'
import adminsearch from '../view/adminsearch'
import admininfo from '../view/admininfo'
import adminpay from '../view/adminpay'
import adminpayinfo from '../view/adminpayinfo'
import adminsave from '../view/adminsave'
import adminedit from '../view/adminedit1'
const router = [
	{path:'/',redirect: '/login'},
	{path:'/login',component:login,name:'login'},
	{path:'/relogin',component:relogin,name:'relogin'},
	{path:'/password',component:password,name:'password'},
	{path:'/reset',component:reset,name:'reset'},	
//    {path:'/test',component:test,name:'test'},

    {path:'/userpay',component:userpay,name:'userpay',meta:{requireAuth: true}},
    {path:'/usersearch',component:usersearch,name:'usersearch',meta:{requireAuth: true}},
    {path:'/usersearch/userinfo',component:userinfo,name:'userinfo',meta:{requireAuth: true}},
    
    {path:'/adminsearch',component:adminsearch,name:'adminsearch',meta:{requireAuth: true}},   
    {path:'/adminsearch/admininfo',component:admininfo,name:'admininfo',meta:{requireAuth: true}},
    {path:'/adminpay',component:adminpay,name:'adminpay',meta:{requireAuth: true}},
    {path:'/adminpay/adminpayinfo',component:adminpayinfo,name:'adminpayinfo',meta:{requireAuth: true}},
    {path:'/adminsave',component:adminsave,name:'adminsave',meta:{requireAuth: true}},
    {path:'/adminedit',component:adminedit,name:'adminedit',meta:{requireAuth: true}},

//	{path:'/tableinfo',component:_import('search'),name:'tableinfo',meta:{requireAuth: true}},
//	{path:'/tableinfo/searchinfo',component:_import('searchInfo'),name:'searchinfo',meta:{requireAuth: true}},
//	{path:'/tableinfo/userdesc',component:_import('searchUserInfo'),name:'userdesc',meta:{requireAuth: true}},
//	{path:'/tableinfo/searchfoud',component:_import('searchFoud'),name:'searchfoud',meta:{requireAuth: true}},
//	{path:'/payhome',component:_import('home'),name:'home',meta:{requireAuth: true}},
//	{path:'/payhome/homelist',component:_import('homeList'),name:'homelist',meta:{requireAuth: true}},
//	{path:'/payhome/homeinfo',component:_import('homeInfo'),name:'homeinfo',meta:{requireAuth: true}},
//	{path:'/saveinfo',component:_import('saveInfo'),name:'saveinfo',meta:{requireAuth: true}},
//	{path:'/foud',component:_import('foud'),name:'foud',meta:{requireAuth: true}}
]
export default new Router({
	routes: router,
    
})
