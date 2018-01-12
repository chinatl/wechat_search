<template>
	<div class="layout">
        <mt-header title="保单信息查询"></mt-header>
          <div class="infoContent"> 
           <h3 class='infoTitle'>产品信息列表</h3>
           <ul class="container ul" v-for='v in userInfoArr'>
               <li>
                   <span>保险合同号</span>
                   <span>{{v.cntr_no}}</span>
               </li>
               <li>
                   <span>产品名称</span>
                   <span>{{v.prd_name}}</span>
               </li>
               <li>
                   <span>保额</span>
                   <span>{{v.face_amnt}}</span>
               </li>
               <li>
                   <span> 保费</span>
                   <span>{{v.premium}}</span>
               </li>
               <li>
                   <span>生效日期</span>
                   <span>{{v.in_force_date | date}}</span>
               </li>
               <li>
                   <span>终止日期</span>
                   <span>{{v.term_date | date}}</span>
               </li>
           </ul>
        </div>
	<div class="loading"  v-show='loading'>
    	<icon name="refresh" spin color='#fff' width='60' height='60'></icon>
    </div>
         <Tablebar></Tablebar>

    </div>
</template>
<script>
	import Tablebar from './../components/userbar.vue';
	import request from 'superagent';
	import URL from '@/config.js'
	export default {
		name: 'usersearch',
		components: {
			Tablebar
		},
		data() {
			return {
				userInfo: {},
				userInfoArr: [],
				loading: true

			}
		},
		methods: {
			goFoud() {
				this.$router.push({
					path: '/tableinfo/searchfoud'
				});
			}
		},
		created() {
			request
				.get(URL+'emp_policy?employee=' + localStorage.getItem('username'))
				.set("Content-Type", "application/json")
				.set("Authorization", "Bearer " + localStorage.getItem('token'))
				.then(res => {
					if (res.body.code == 0) {
						this.loading = false;
						this.userInfo = res.body.data.emp_info;
						this.userInfoArr = res.body.data.insurance_info;
						this.rend = true
					}
				})
		}
	}

</script>
<style scoped>
	.infoContent {
		margin-top: 10px;
	}
	.ul {
		margin-bottom: 10px;
	}
	.ul li span:nth-of-type(2) {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		width: 60%;
	}

</style>
