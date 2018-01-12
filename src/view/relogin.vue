 <template>
	<div class="layout">
		<mt-header title="密码找回">
		  <router-link to="/login" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		 <div class="searchBox">
        <div class="searchTable">
          <p><label for="">身份证账号：</label><input type="text" placeholder='请请输入身份证号' v-model='cardnum'></p>
        </div>
        <input type="button" value="确定" class="seachBtn" @click='submit'>
        </div>
	</div>
</template>

<script>
import { Toast } from 'mint-ui';

	export default{
		name:'relogin',
		data(){
			return {
				username:'',
				cardnum: '',
			}
		},
		created(){
		},
		methods:{
			submit(){
				var reg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
				if(!reg.test(this.cardnum)){
					return Toast({
				  		message: '请输入有效身份证号码',
					});
				}
				this.$router.push({'path':'/password'})
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