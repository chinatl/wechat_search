<template>
    <div class='layout'>
      <mt-header title="保全信息查询"></mt-header>
        <div class="infoContent"> 
           <h3 class='infoTitle'>保全信息列表</h3>
               <ul class="container ul" v-for='v in data'>
                   <li>
                       <span>保全批改流水号</span>
                       <span>{{v.mtn_arc_no}}</span>
                   </li> 
                      <li>
                       <span>批改项目名称</span>
                       <span>{{v.mtn_item_code}}</span>
                   </li>
                     
                   <li>
                       <span>处理状态</span>
                       <span>{{v.proc_stat}}</span>
                   </li>
                   <li>
                       <span>客户应付合计</span>
                       <span>{{v.amnt}}</span>
                   </li>
                   <li>
                       <span>保全申请日期</span>
                       <span>{{v.appl_date | newDate}}</span>
                   </li>
                   <li>
                       <span>保全生效日期</span>
                       <span>{{v.inforce_date | newDate}}</span>
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
    import {
        format
    } from './../util/index.js';
    import Tablebar from './../components/adminbar.vue';
    import PATH from './../util/common.js';
	import getData from '@/util/res.js';
    export default {
        name: 'adminsave',
        components: {
            Tablebar
        },
        data() {
            return {
                pickerValue: new Date(),
                pickerValue1: new Date(),
                beginDate: new Date(),
                startTime: '',
                endTime: '',
                data: [{
                    "value": 1,
                    "mtn_arc_no": "", //保全批改流水号
                    "mtn_item_code": "", //批改项目名称
                    "proc_stat": "", //处理状态
                    "amnt": "", // 金额
                    "mio_class": "", // (为-1 时候显示的应付，+1 显示的应取)
                    "appl_date": "", // 保全申请日期
                    "inforce_date": "" //保全生效日期
                }
              ],
			   loading:true
            }
        },
        created() {
			getData('mtn', '', res => {
				this.data = res;
				this.loading = false;
			})
        },
        methods: {
           
        }
    }

</script>


<style scoped>
    .switch {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        border: 1px solid #dfdfdf;
        background-color: #fff;
    }
    
    .angle {
        float: right;
        margin-right: 6px;
        margin-top: 12px;
    }
    
    .switch span {
        font-size: 1rem;
        font-weight: 900
    }
    
    .switch .switch_num {
        margin-right: 2px;
    }
    
    .infoContent {
        margin-top: 10px;
    }
    
    .container li span {
        font-size: 1rem;
    }
	.ul {
		margin-bottom: 6px;
	}
</style>
