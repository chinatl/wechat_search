<template>
    <div class='layout'>
    <mt-header title="保险人信息">
         <router-link to="/adminsearch" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
    <mt-navbar v-model="selected">
        <mt-tab-item id="1"><span class="mint-navbar-span ">被保险人信息</span></mt-tab-item>
        <mt-tab-item id="2"><span class="mint-navbar-span ">连带被保险人信息</span></mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
         <div class="infoContent current"> 
           <h3 class='infoTitle'>被保险人信息</h3>
           <ul class="container">
               <li>
                   <span>员工工号</span>
                   <span>-</span>
               </li>
               <li>
                   <span>员工姓名</span>
                   <span>王新华</span>
               </li>
               <li>
                   <span>性别</span>
                   <span>男</span>
               </li>
               <li>
                   <span>出生日期</span>
                   <span>1965-12-07</span>
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
                   <span>联系电话</span>
                   <span>18516911134</span>
               </li>
               <li>
                   <span>邮箱地址</span>
                   <span>linlihu1e@163.com</span>
               </li>
               <li>
                   <span>账号所有人姓名</span>
                   <span>-</span>
               </li>
               <li>
                   <span>银行名称</span>
                   <span>上海银行</span>
               </li>
               <li>
                   <span>账户证件类型</span>
                   <span>身份证</span>
               </li>
               <li>
                   <span>证件号码</span>
                   <span>341281196512071132</span>
               </li>
               <li>
                   <span>银行账号</span>
                   <span>600010001511001531</span>
               </li>
           </ul>
        </div>
          <div class="infoContent"> 
           <h3 class='infoTitle'>保单详细信息</h3>
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
                   <span>生效日期</span>
                   <span>2017-03-18</span>
               </li>
               <li>
                   <span>终止日期</span>
                   <span>2018-03-17</span>
               </li>
               <li>
                   <span>人员组别</span>
                   <span>在职</span>
               </li>
           </ul>
        </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
         <div class="infoContent current"> 
           <h3 class='infoTitle'>连带被保险人信息</h3>
           <ul class="container">
               <li>
                   <span>姓名</span>
                   <span>王新华</span>
               </li>
               <li>
                   <span>性别</span>
                   <span>女</span>
               </li>
               <li>
                   <span>出生日期</span>
                   <span>1965-12-07</span>
               </li>
               <li>
                   <span>证件类型</span>
                   <span>身份证</span>
               </li>
               <li>
                   <span>证件号码</span>
                   <span>34128119970413002x</span>
               </li>
               <li>
                   <span>联系电话</span>
                   <span>-</span>
               </li>
               <li>
                   <span>邮箱地址</span>
                   <span>-</span>
               </li>
               <li>
                   <span>与员工关系</span>
                   <span>子女</span>
               </li>
               <li>
                   <span>账户所有人姓名</span>
                   <span>吴宏伟</span>
               </li>
               <li>
                   <span>银行名称</span>
                   <span>上海银行</span>
               </li>
               <li>
                   <span>账户证件类型</span>
                   <span>身份证</span>
               </li>
               <li>
                   <span>账户证件号码</span>
                   <span>341281196512071132</span>
               </li>
               <li>
                   <span>银行账号</span>
                   <span>600010001511001531</span>
               </li>
           </ul>
        </div>
          <div class="infoContent"> 
           <h3 class='infoTitle'>保险责任信息</h3>
           <ul class="container">
               <li>
                   <span>保险合同号</span>
                   <span>2017110000818405002581</span>
               </li>
               <li>
                   <span>产品名称</span>
                   <span>国寿团体补充医疗保险(A型)</span>
               </li>
               <li>
                   <span>保额</span>
                   <span>20000.0</span>
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
        </div>
        </mt-tab-container-item>
         
    </mt-tab-container>
    <Tablebar></Tablebar>
</div>
</template>


<script>
    import Tablebar from './../components/adminbar.vue';
    export default {
        name: 'admininfo',
        components: {
            Tablebar
        },
        data() {
            return {
                selected: '1',
            }
        },
        created() {

        },
        methods: {
         
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
        font-size: 1.1rem;
    }
</style>
