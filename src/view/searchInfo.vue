<template>
    <div class='layout'>
	    <mt-header title="保单信息">
	        <router-link to="/" slot="left" >
	    <mt-button icon="back" style='color:#fff'></mt-button>
	  </router-link>
	    </mt-header>
    <mt-navbar v-model="selected">
        <mt-tab-item id="1"><span class="mint-navbar-span ">企业保单查询</span></mt-tab-item>
        <mt-tab-item id="2"><span class="mint-navbar-span ">员工保障查询</span></mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
         <div class="infoContent current"> 
           <h3 class='infoTitle'>投保概要信息</h3>
           <ul class="container">
               <li>
                   <span>公司名称</span>
                   <span>小熊猫股份有限公司</span>
               </li>
               <li>
                   <span>公司地址</span>
                   <span>河北省石家庄一镇桥西区二桥三</span>
               </li>
               <li>
                   <span>在线人数</span>
                   <span>56人</span>
               </li>
               <li>
                   <span>保单联系人</span>
                   <span>小熊猫</span>
               </li>
               <li>
                   <span>联系电话</span>
                   <span>13811716679</span>
               </li>
               <li>
                   <span>联系邮箱</span>
                   <span>xiaoxiongmao@126.com</span>
               </li>
           </ul>
        </div>
          <div class="infoContent"> 
           <h3 class='infoTitle'>产品信息列表</h3>
           <ul class="container">
               <li>
                   <span>保险合同号</span>
                   <span>2017110000818405002581</span>
               </li>
               <li>
                   <span>产品名称</span>
                   <span>国寿绿洲团体意外伤害保险</span>
               </li>
               <li>
                   <span>保额</span>
                   <span>1400000.00</span>
               </li>
               <li>
                   <span> 保费</span>
                   <span>573.48</span>
               </li>
               <li>
                   <span>生效日期</span>
                   <span>2017-03-18</span>
               </li>
               <li>
                   <span>终止日期</span>
                   <span>2018-03-17</span>
               </li>
           
           </ul>
               <input type="button" value="理赔查询" class='seachBtn' @click='goRoute'>
               <input type="button" value="保全查询" class='seachBtn' @click='goSave'>
        </div>
        </mt-tab-container-item>
         <mt-tab-container-item id="2">
           
      <div class="searchBox">
      		<div class="searchTable">
     		 <p><label for="">员工姓名：</label><input type="text" placeholder='请正确填写'></p>
                <p><label for="">员工工号：</label><input type="number"  placeholder='请正确填写'></p>
                <p><label for="">员工证件类型：</label><input type="text"  placeholder='请正确填写'></p>
                <p><label for="">员工证件号：</label><input type="number"  placeholder='请正确填写'></p>
      		</div>
      		<input type="button" value="查询" class="seachBtn">
            <input type="button" value="重置" class='seachBtn resetBtn'> 
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
                        <span>
                            <router-link to='/tableinfo/userdesc'>王新华</router-link>
                        </span>
                    </li>
                    <li>
                        <span>证件类型</span>
                        <span>身份证</span>
                    </li>
                    <li>
                        <span>证件号码</span>
                        <span>341281196512071132</span>
                    </li>
                </ul>
            </div>
        </mt-tab-container-item>
    </mt-tab-container>
</div>
</template>


<script>
    export default {
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
                }, ]
            }
        },
        created() {

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
</style>
