<template>
    <div class='layout'>
	    <mt-header title="保单信息">
	    </mt-header>
    <mt-navbar v-model="selected">
        <mt-tab-item id="1"><span class="mint-navbar-span ">企业保单</span></mt-tab-item>
        <mt-tab-item id="2"><span class="mint-navbar-span ">个人保单</span></mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
         <div class="infoContent current"> 
           <h3 class='infoTitle'>投保概要信息</h3>
           <ul class="container">
               <li>
                   <span>公司名称</span>
                   <span>{{firm_info.comp_name}}</span>
               </li>
               <li>
                   <span>在线人数</span>
                   <span>{{firm_info.emp_appl_num}}</span>
               </li>
               <li>
                   <span>保单联系人</span>
                   <span>{{firm_info.contract_psn}}</span>
               </li>
           </ul>
        </div>
          <div class="infoContent"> 
           <h3 class='infoTitle'>产品信息列表</h3>
           <ul class="container ul" v-for='v in policy_info'>
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
                   <span>{{v.sum_face_amnt}}</span>
               </li>
               <li>
                   <span> 保费</span>
                   <span>{{v.sum_premium}}</span>
               </li>
               <li>
                   <span>生效日期</span>
                   <span>{{v.in_force_date | date}}</span>
               </li>
               <li>
                   <span>终止日期</span>
                   <span>{{v.cntr_expiry_date | date}}</span>
               </li>
           </ul>
           
        </div>
        </mt-tab-container-item>
         <mt-tab-container-item id="2">
				<div class="searchBox">
				  <div class="searchTable">
					<p><label for="">证件号码：</label><input type="number"  placeholder='请正确填写' v-model='employee'></p>
				  </div>
					<input type="button" value="查询" class='seachBtn' @click='search'> 
				</div>
				<div class="infoContent" v-show='rend'> 
                <h3 class='infoTitle'>员工列表</h3>
                <ul class="container">
                    <li>
                        <span>员工姓名</span>
                        <span>
                            {{userInfo.name}}
                        </span>
                    </li>
                    <li>
                        <span>员工性别</span>
                        <span>
                            {{userInfo.sex | sex}}
                        </span>
                    </li>
                    <li>
                        <span>证件类型</span>
                        <span>身份证</span>
                    </li>
                    <li>
                        <span>证件号码</span>
                        <span>{{userInfo.id_no}}</span>
                    </li>
                    <li>
                        <span>出生日期</span>
                        <span>{{userInfo.birth_date | date}}</span>
                    </li>
                </ul>
                
            </div>
             <div class="infoContent" v-show='rend'> 
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
        </mt-tab-container-item>
    </mt-tab-container>
    <div class="loading"  v-show='loading'>
    	<icon name="refresh" spin color='#fff' width='60' height='60'></icon>
    </div>
    <Tablebar></Tablebar>
</div>
</template>


<script>
	import Tablebar from './../components/adminbar.vue';
	import PATH from './../util/common.js';
	import getData from '@/util/request.js';
	import getDataSearch from '@/util/request.js';
	import request from 'superagent';
	import URL from '@/config.js'
	export default {
		components: {
			Tablebar
		},
		data() {
			return {
				"selected": '1',
				"firm_info": {
					"comp_name": "", //公司名称
					"emp_appl_num": "", //人数
					"contract_psn": "" //保单联系人
				},
				"policy_info": [],
				"employee": "",
				loading: true,
				userInfo:{},
				userInfoArr:[],
				rend:false
			}
		},
		created() {
			getData('firm_policy', '', res => {
				console.log(res)
				this.loading = false
				this.firm_info = res.firm_info;
				this.policy_info = res.policy_info;
				
			})
		},
		methods: {
			search() {
				this.loading = true;
				setTimeout(()=>{
					this.loading = false;
				},2000)
				var url = '';
				if (this.employee) {
					url = '?employee=' + this.employee;
				} else {
					url = '';
				}
				request
				.get(URL+'emp_policy' + url)
				.set("Content-Type", "application/json")
				.set("Authorization", "Bearer " + localStorage.getItem('token'))
				.then(res => {
					console.log(res)
					if(res.body.code == 0){
						this.loading = false;
						this.userInfo = res.body.data.emp_info;
						this.userInfoArr = res.body.data.insurance_info;
						this.rend = true
					}
				})

			}
		}

	}
</script>


<style scoped>

	.current {
		margin-top: 10px;
	}
	
	.mint-navbar a.mint-tab-item.is-selected {
		border-bottom: 3px solid #1D9F49;
		color: #1D9F49;
	}
	
	.mint-navbar-span {
		font-size: 1.2rem;
	}
	
	.ul {
		margin-bottom: 6px;
	}
	
	.ul li span:nth-of-type(2) {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		width: 60%;
	}

</style>
