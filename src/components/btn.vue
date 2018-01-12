 <template>
	<div class="box"><button @click='a'>{{title}}</button></div>
</template>

<script>
// import { Toast } from 'mint-ui';
// import common from '../kits/common.js';

	export default{
		data(){
		return {
//	
			}
		},
	props: {
	    title: {
	      type: String,
	      default:'确定'
	    }
	  },
		created(){
		
		},
		methods:{
			a(){
			}
		}
	}
</script>

<style scoped>
	.box {
		width: 80%;
		margin: 0 auto;
	}
	.box button {
		width: 100%;
		display: block;
		height: 3rem;
		font-size: 1.2rem;
		box-sizing: border-box;
		background-color: #33b5e5;
		color: #fff;
		text-align: center;
		border:none;
		border-radius: 4px;
		outline: none;
	}
</style>