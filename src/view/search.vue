<template>
	<div class="layout">
  <mt-header title="保单信息查询"></mt-header>

      <div class="searchBox">
      		<div class="searchTable">
     		 	<p>
     		 		<label for="">保单号：</label><input type="number" placeholder='请正确填写'>
 		 		</p>
      		</div>
      		<input type="button" value="查询" class="seachBtn">
      </div>
       <div class="infoContent"> 
           <h3 class='infoTitle'>保单基本信息</h3>
           <ul class="container">
               <li>
                  <span>主包单号</span>
                       <span><router-link to='/tableinfo/searchinfo'>
                      2017110000818405002581
                  </router-link></span>
               </li>
               <li>
                   <span>主险产品名称</span>
                   <span>国寿绿洲团体意外险</span>
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
                   <span>110000</span>
               </li>
               <li>
                   <span>备注</span>
                   <span>无</span>
               </li>
           </ul>
<input type="button" value="理赔查询" class="seachBtn" @click='goRoute'>
<input type="button" value="保全查询" class="seachBtn" @click='goSave'>
<input type="button" value="资金查询" class="seachBtn" @click='goFoud'>
        </div>    
        </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    methods: {
        goRoute() {
              localStorage.setItem('paysearch', '1')
              this.$router.push({
                  path: '/payhome'
              });
          },
        goSave() {
            this.$router.push({
                path: '/saveinfo'
            });
        },
        goFoud(){
           this.$router.push({
                path: '/tableinfo/searchfoud'
            });
        }
    },
  }
</script>
<style scoped>

</style>