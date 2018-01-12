<template>
    <div class='layout'>
    <mt-header title="整体赔案信息"></mt-header>
         <div class="infoContent"> 
           <h3 class='infoTitle'>理赔信息列表</h3>
           <ul class="container ul" v-for='v in data'>
               <li>
                   <span>理赔案件号</span>
                   <span>{{v.cpnst_caseprt_no}}</span>
               </li>
               <li>
                   <span>赔付类型</span>
                   <span>{{v.claim_type}}</span>
               </li>
               <li>
                   <span>报案人</span>
                   <span>{{v.opsn_name}}</span>
               </li>
               <li>
                   <span>理赔金额</span>
                   <span>{{v.amnt}}</span>
               </li>
               <li>
                   <span>出险经过</span>
                   <span>{{v.occur_course}}</span>
               </li>
               <li>
                   <span>出险日期</span>
                   <span>{{v.occur_time | newDate}}</span>
               </li>
               <li>
                   <span>结案日期</span>
                   <span>{{v.close_date | newDate}}</span>
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
    import Tablebar from './../components/adminbar.vue';
    import PATH from './../util/common.js';
	import getData from '@/util/request.js';

    export default {
        name: 'adminpay',
        components: {
            Tablebar
        },
        data() {
            return {
                index:0,
                selected: '1',
                data: [{
                    "cpnst_caseprt_no": "", //理赔案件号
                    "opsn_name": "", //报案人
                    "cliam_type": "", //赔付类型
                    "amnt": "", //理赔金额
                    "occur_time": "", //出险时间
                    "close_date": "", //结案时间
                    "occur_course": "", //出险经过
                }],
				loading: true

            }
        },
        created() {
			getData('claims', '', res => {
				this.data = res.claims;
				this.loading = res.false;
			})
        },
        methods: {
           

        }

    }

</script>


<style scoped>
    .mint-navbar a.mint-tab-item.is-selected {
        border-bottom: 3px solid #1D9F49;
        color: #1D9F49;
    }
    
    .infoContent {
        margin-top: 10px;
    }
	.ul {
		margin-bottom: 6px;	
	}

</style>
