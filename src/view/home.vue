<template>
    <div class='layout'>
    <mt-header title="理赔信息查询"></mt-header>
    <mt-navbar v-model="selected">
        <mt-tab-item id="1"><span class="mint-navbar-span ">查询整体赔案信息</span></mt-tab-item>
        <mt-tab-item id="2"><span class="mint-navbar-span ">查询个人赔案信息</span></mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
      
        <div class="searchBox">
      		<div class="searchTable">
     		 	    <p><label for=""><span class="import">*</span>保险合同号：</label><input type="number" placeholder='请正确填写'></p>
      		</div>
      		<input type="button" value="查询" class="seachBtn">
      	</div>
         <div class="infoContent"> 
           <h3 class='infoTitle'>理赔信息列表-<span style="font-size:1rem">2017110000818405002581</span></h3>
           <ul class="container">
               <li>
                   <span>理赔案件号</span>
                   <span>2017110000818405002581</span>
               </li>
               <li>
                   <span>立案处理状态</span>
                   <span>结案完成</span>
               </li>
               <li>
                   <span>出险日期</span>
                   <span>-</span>
               </li>
               <li>
                   <span>理赔金额</span>
                   <span>2820.53</span>
               </li>
               <li>
                   <span>结案日期</span>
                   <span>2016-06-03</span>
               </li>
           </ul>
        </div>
        <div class="infoContent"> 
           <h3 class='infoTitle'>立案保单列表</h3>
           <ul class="container">
               <li>
                   <span>分保单号</span>
                   <span>
                       <router-link to='payhome/homeinfo'>2017110000818405002581</router-link>
                   </span>
               </li>
               <li>
                   <span>结算给付金额</span>
                   <span>2820.53</span>
               </li>
               <li>
                   <span>合同处理意见</span>
                   <span>-</span>
               </li>
               <li>
                   <span>合同终止日期</span>
                   <span>-</span>
               </li>
           </ul>
        </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
        <div class="table">
        
        </div>
          <div class="searchBox">
      		<div class="searchTable">
     		    <p><label for="">员工姓名：</label><input type="text"  placeholder='请正确填写'></p>
	            <p><label for="">员工工号：</label><input type="text"  placeholder='请正确填写'></p>
	            <p><label for="">证件类型：</label><input type="text"  placeholder='请正确填写'></p>
	            <p><label for="">证件号码：</label><input type="number"  placeholder='请正确填写'></p>
      		</div>
      	   <input type="button" value="查询" class='seachBtn' /> 
        <input type="button" value="重置" class='seachBtn resetBtn'/>     
      	</div>
         <div class="infoContent"> 
           <h3 class='infoTitle'>员工列表</h3>
           <ul class="container">
               <li>
                   <span>员工工号</span>
                   <span>3</span>
               </li>
               <li>
                   <span>员工姓名</span>
                   <span>王新华</span>
               </li>
               <li>
                   <span>证件类型</span>
                   <span>身份证</span>
               </li>
               <li>
                   <span>证件号码</span>
                   <span>341281196512071132</span>
               </li>
               <li>
                   <span>企业名称</span>
                   <span>小熊猫有限公司</span>
               </li>
           </ul>
        </div>
          <div class="infoContent"> 
           <h3 class='infoTitle'>团单信息列表</h3>
           <ul class="container">
               <li>
                   <span>主保单号</span>
                   <span>2014110238d87700008079</span>
               </li>
               <li>
                   <span>主险产品名称</span>
                   <span>国寿团体补充医疗保险(A型)</span>
               </li>
               <li>
                   <span>企业名称</span>
                   <span>小熊猫有限公司</span>
               </li>
               <li>
                   <span>生效日期</span>
                   <span>2017-03-18</span>
               </li>
               <li>
                   <span>终止日期</span>
                   <span>2018-03-17</span>
               </li>
               <li>
                   <span>管理机构号</span>
                   <span>110238</span>
               </li>
               <li>
                   <span>备注</span>
                   <span>-</span>
               </li>
           </ul>
        </div>
        </mt-tab-container-item>
         
    </mt-tab-container>
    <Tablebar></Tablebar>
</div>
</template>


<script>
import request from 'superagent'
import Tablebar from './../components/userbar.vue'
    export default {
        components:{Tablebar},
        data() {
            return {
                selected: '1',
                data: [{
                        number: '2017110000818405002581',
                        product_name: '国寿绿洲团体意外',
                        company_name: '小熊猫有限公司',
                        start_time: '2017-03-18',
                        end_time: '2018-03-17',
                        manager_num: '110000',
                        remark: '1234',
                    },
                ]
            }
        },
        created() {
            var selected = localStorage.getItem('paysearch');
            this.selected = typeof(selected) === 'object' ?'1':'2';
            localStorage.removeItem('paysearch');
            this.getIP()
        },
        methods:{
      
            getIP(){
            var IP = "http://pv.sohu.com/cityjson";
            request
              .get(IP)
              .query({ ie:'utf-8' })
              .withCredentials()
              .end(function(res){
                console.log(res)
              })
         
              request('http://pv.sohu.com/cityjson?ie=utf-8', function(res){
console.log(res)
            });
          }
        }

    }

</script>


<style scoped>
    .mint-navbar a.mint-tab-item.is-selected {
        border-bottom: 3px solid #1D9F49;
        color: #1D9F49;
    }
   
   
</style>
