<template>
	<div class="layout">
		<img :src="img" alt="" class="logo">
		<div class="form">
			<h3 class="title">团体大客户查询系统</h3>
			<input type="text" placeholder="用户名" v-model='username'>
			<input type="password" placeholder="密码" v-model='pwd'>
			<p class='tips' v-show='showTips'>{{tips}}，请重新登录！</p>
			<input type="button" class="btn" v-model="login" @click='isLogin'>
			<!-- <div class="forget">
				<router-link to="/relogin">忘记密码</router-link>
				<router-link to='/reset'>修改密码</router-link>
			</div> -->
		</div>
	</div>
</template>

<script>
	import PATH from './../util/common.js';
	import Logo from '@/assets/img/logo.jpg';
	import request from 'superagent'
	import { Base64 } from 'js-base64';
	import URL from '@/config.js'
	export default {
		name: 'login',
		data() {
			return {
				username: '',
				pwd: '',
				error: '',
				ok: 0,
				login:'登录',
				tips:'密码错误',
				img:'',
				showTips:false
			}
		},
		computed: {
			user() {
				return this.$store.state.user
			}
		},
		created() {
			this.img = Logo;
		},
		methods: {
			isLogin: function() {
				if(!this.username){
					return 
				}
				if(!this.pwd){
					return 
				}
				this.login ='正在登陆...';
				var _this = this;
				request
					.post(URL+'login')
					.set("Content-Type", "application/json")
//					.send('{"user_name":"2017610166600008718","pwd":"a111111"}')
					.send(JSON.stringify({"user_name":this.username,"pwd":this.pwd}))
					.then(function(res) {
						if (res.body.code == 0){
							_this.login ='登陆成功';
							var data = res.body.data;
							localStorage.setItem('token',data);
							var user =JSON.parse(Base64.decode(data.split('.')[1]))
							if(user.user_type==='1'){
								_this.$router.push({
									path: 'adminsearch'
								});
							}else if(user.user_type==='0'){
								localStorage.setItem('username',_this.username);
								_this.$router.push({
									path: 'usersearch'
								});
							}
						}
						if(res.body.code != 0){
							_this.tips = res.body.msg;
							_this.login ='登陆';
							_this.showTips = true
						}
					})
				 	.catch(function(err) {
					  	alert('网络错误')
				   });			

				;
			}
		}
	}

</script>

<style scoped>
	.layout {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #fff
	}
	.logo {
		width: 100%;
		margin-top: 20%
	}
	.form {
		width: 80%;
		margin: 0 auto;
	}
	
	.title {
		margin: 0 0 20px;
		font-family: 'RobotoDraft', 'Roboto', sans-serif;
		color: #33b5e5;
		font-size: 1.5rem;
		font-weight: 900;
		line-height: 2rem;
		text-align:center;
	}	
	.form input {
		margin-top: 20px;
		width: 100%;
		display: block;
		height: 3rem;
		border: 1px solid #ccc;
		padding-left: 10px;
		font-size: 1.2rem;
		box-sizing: border-box;
	}
	
	input.btn {
		background-color: #33b5e5;
		color: #fff;
		text-align: center;
		border: none;
		border-radius: 0;
		outline: 0;
	}
	
	.forget {
		text-align: center;
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
	}
	
	.forget a {
		color: #aaa;
		font-size: 1.1rem;
	}
	.tips {
		margin-top:10px;
		font-size: .12rem;
		color:red
	}
</style>
