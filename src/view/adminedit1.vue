<template>
    <div class='layout'>
        <mt-header title="理赔资料上传"></mt-header>
        <div class="check_type">
        	<label for="" style='float:left'>选择类型:</label>
			<mt-radio
			  v-model="value"
			  @change="change"
			  :options="options">
			</mt-radio>
        </div>
	   <Upload title='理赔申请书' :list='arr0' name='pic0'></Upload>
	   <Upload title='身份证及关系证明' :list='arr1' name='pic1'></Upload>
	   <Upload title='银行卡' :list='arr2'  name='pic2'></Upload>
	   <Upload title='门诊病例' :list='arr3'  name='pic3'></Upload>
	   <Upload title='发票' :list='arr4'  name='pic4'></Upload>
	   <Upload title='相关检测报告单或者化验单' :list='arr5' v-show='type'  name='pic5'></Upload>
	   <Upload title='社保报销凭证' :list='arr5' v-show='!type'  name='pic5'></Upload>
	   <Upload title='医疗费用清单' :list='arr6'  name='pic6'></Upload>
	   <div class="searchBox">
			<input type="submit" value="提交" @click='postimg($event)' class='seachBtn' style="margin-top: 0;margin-bottom: 10px;"> 
		</div>
		  <div id="loading"  v-show='$store.state.upload.loading'>
			  <div>
			    	<p style="color:#fff;font-size: 16px;font-weight: bold">正在上传...</p>
			    	<icon name="refresh" spin color='#fff' width='60' height='60'></icon>
			  </div>
		    </div>
        <Tablebar></Tablebar>
    </div>
</template>


<script>
	import $ from 'jquery'
	import {
		format
	} from './../util/index.js';
	import Tablebar from './../components/adminbar.vue';
	import Upload from './../components/Upload1.vue';
	import downLoad from '@/assets/img/download.png';
	import request from 'superagent'
	import {
		Toast
	} from 'mint-ui';
	import {
		MessageBox
	} from 'mint-ui';
	import URL from '@/config.js'
	export default {
		name: 'adminedit',
		components: {
			Tablebar,
			Upload
		},
		data() {
			return {
				downLoad: '',
				value: '0',
				options: [{
					label: '门诊理赔',
					value: '0'
				}, {
					label: '住院理赔',
					value: '1'
				}],
				type: '0',
				arr0: [],
				arr1: [],
				arr2: [],
				arr3: [],
				arr4: [],
				arr5: [],
				arr6: [],
			}
		},
		created() {
			this.downLoad = downLoad;
			console.log(location.href.split('#')[0])
			request
			.post(URL + 'param')
			.set("Content-Type", "application/json")
			.set("Authorization", "Bearer " + localStorage.getItem('token'))
			.send(JSON.stringify({url:location.href.split('#')[0]}))
			.then(res => {
				console.log(res)
				if(res.body){
				var data = res.body;
					wx.config({
						debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
						appId: data.appid, // 必填，公众号的唯一标识
						timestamp:data.timestamp , // 必填，生成签名的时间戳
						nonceStr: data.noncestr, // 必填，生成签名的随机串
						signature: data.signature,// 必填，签名，见附录1
						jsApiList: ['chooseImage','uploadImage','downloadImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
					});
					wx.ready(function(){
						//判断当前客户端版本是否支持指定JS接口
						wx.checkJsApi({
							jsApiList: ['chooseImage', 'uploadImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
							success: function(res) {
								// 以键值对的形式返回，可用的api值true，不可用为false
								// 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
								if(!res["checkResult"]["chooseImage"]) {
									alert("当前客户端不支持上传图片");
								}
							}
						});
					});
				}
			}).catch(err=>{
					console.dir(err);
					if(err.status == 500){
						alert('网络错误')
					}
				})
			},
		methods: {
			getSrc(arr) {
				var len = arr.length;
				var newArr = [];
				for (var i = 0; i < len; i++) {
					newArr.push(arr[i].file)
				}
				return newArr
			},
			checkSrc(arr) {
				console.log(arr.length)
				if (arr.length === 0) {
					Toast({
						message: '至少选择一张图片',
						position: 'middle',
						duration: 1000
					});
					return true
				}
			},
			postimg(e) {
				e.preventDefault();
				console.log(this.arr0)
				if(this.checkSrc(this.arr0)){
					return 
				}
				if(this.checkSrc(this.arr1)){
					return 
				}
				if(this.checkSrc(this.arr2)){
					return 
				}
				if(this.checkSrc(this.arr3)){
					return 
				}
				if(this.checkSrc(this.arr4)){
					return 
				}
				if(this.checkSrc(this.arr5)){
					return 
				}
				if(this.checkSrc(this.arr6)){
					return 
				}
				this.$store.state.upload.loading = true;
				request
					.post(URL + 'claims')
					.set("Content-Type", "application/json")
					.set("Authorization", "Bearer " + localStorage.getItem('token'))
					.send(JSON.stringify({
						"type": this.type,
						"img_type": ["0", "1","2","3","4","5","6"],
						"0": this.arr0,
						"1": this.arr1,
						"2": this.arr2,
						"3": this.arr3,
						"4": this.arr4,
						"5": this.arr5,
						"6": this.arr6,
					}))
					.then(res => {
						if (res.body.code == 0) {
							this.$store.state.upload.loading = false;
							MessageBox.alert('操作成功').then(action => {　
								this.$router.go(0);
								window.scrollTo(0, 0)
							});

						}
					}).catch(err=>{
			            console.dir(err);
			            if(err.status == 500){
			              alert('网络错误')
			            }
			          })
			},
			change(e) {
				this.type = e === '0' ? true : false;
				this.arr3 = [];
				this.arr4 = [];
				this.arr5 = [];
				this.arr6 = [];
			}
		}
	}

</script>


<style>
	#loading {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .2);
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10
	}
	
	label.mint-radiolist-label {
		display: inline-block
	}
	
	a.mint-cell {
		width: 110px;
		display: inline-block
	}
	
	div.mint-cell-wrapper {
		background-image: none;
	}
	
	div.mint-cell-wrapper {
		padding: 0;
	}
	
	a.mint-cell:last-child {
		background-image: none;
	}
	
	div.mint-radiolist {}
	
	div.mint-radiolist-title {
		margin: 0
	}
	
	label.mint-radiolist-label {
		padding: 0;
	}
	
	.up .lable {}
	
	.layout {
		background-color: #fff;
	}
	
	.containerItem {
		overflow: hidden
	}
	
	.downLoad {
		width: 50px;
		height: 50px;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.check_type {
		display: flex;
		align-items: center;
		padding-left: 8px;
		border-bottom: 1px solid #efefef
	}
	
	.check_type label {
		font-size: 16px;
		float: left;
	}
	
	.file {
		opacity: 0;
		width: 50px;
		height: 50px;
		position: relative;
		z-index: 10;
	}
	
	.content {
		padding: 6px;
		border-bottom: 1px solid #efefef;
		overflow: hidden;
	}
	
	.content p {
		width: 100%;
		overflow: hidden;
	}
	
	.content label {
		float: left;
		margin-bottom: 5px;
		/*width: 130px;*/
		margin-left: 5px;
	}
	.content .pictur img {
		margin-right: 5px;
		margin-bottom: 5px;
		width: 55px;
		height: 55px;
	}
	.imgs {
		width: 50px;
		height: 50px;
		position: relative;
		display: inline-block;
		float: left;
		margin: 0 5px 5px 5px;
	}
	
	.imgs img {
		width: 50px;
		height: 50px;
		display: block;
		float: left
	}
	
	.imgs .upload_warp_img_div_del {
		position: absolute;
		top: 0;
		right: 0;
		width: 15px;
		height: 15px;
	}

</style>
