 <template>
	<div class="layout">
		<mt-header title="修改密码">
		  <router-link to="/login" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		 <div class="searchBox">
        <div class="searchTable">
          <p><label for="">账号：</label><input type="text" placeholder='请正确填写' v-model='username'></p>
          <p><label for="">旧密码：</label><input type="password"  placeholder='请正确填写' v-model='oldpwd'></p>
          <p><label for="">新密码：</label><input type="password"  placeholder='请正确填写' v-model='newpwd'></p>
          <p><label for="">确认新密码：</label><input type="password"  placeholder='请正确填写' v-model='repwd'></p>
        </div>
        <input type="button" value="确定" class="seachBtn" @click='submit'>
        </div>
	</div>
</template>

<script>
import { Toast } from 'mint-ui';
import request from 'superagent'
export default{
	data(){
		return {
			oldpwd:'',
			newpwd:'',
			repwd: '',
			username:''
		}
	},
	created(){
	
	},
	methods:{
		submit(){
			if(!(this.oldpwd&&this.newpwd&&this.repwd)){
				return 
			}
			if(this.newpwd.length<6){
				return Toast({
				  	message: '新密码长度太短',
				});
			}
			if(this.newpwd !== this.repwd) {
				return Toast({
					message: '2次输入新密码应该一致'
				})
			}
			request
				.post('/enterprise/api/login')
				.set("Content-Type", "application/json")
				.send(JSON.stringify({"user_name":this.username,"pwd":this.oldpwd}))
				.then(function(res) {
					if (res.body.code == 0){
						var data = res.body.data;
						request.put('/enterprise/api/pwd')
							.set("Content-Type", "application/json")
							.set("Authorization", "Bearer " +data )
							.send(JSON.stringify({"old_pwd":this.oldpwd,"new_pwd":this.newpwd}))
							.then(res => {
								let instance = Toast('修改成功，请用新密码登录');
								setTimeout(() => {
									instance.close();
									this.$router.push({'path': 'login'});
								}, 1000);
							})
					}
				})
		}
	}
}
</script>

<style scoped>
.seachBtn{
	color: #fff;
	background-color: #33b5e5;
}
header.mint-header {
	background-color: #33b5e5;
}
</style>