<template>
    <div class='layout'>
    <mt-header title="标准理赔信息">
         <router-link to="/adminpay" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
   <div class="infoContent"> 
       <h3 class='infoTitle'>赔付理算信息列表</h3>
       <ul class="container">
           <li>
               <span>被保险人姓名</span>
               <span>王浩然</span>
           </li>
           <li>
               <span>理赔给付类型</span>
               <span>约定给付</span>
           </li>
           <li>
               <span>赔付金额</span>
               <span>0.00</span>
           </li>
           <li>
               <span>核准赔付金额</span>
               <span>100000.00</span>
           </li>
           <li>
               <span>给付项目</span>
               <span>死亡赔付</span>
           </li>
       </ul>
    </div>
    <mt-navbar v-model="selected">
        <mt-tab-item id="1"><span class="mint-navbar-span">费用明细</span></mt-tab-item>
        <mt-tab-item id="2"><span class="mint-navbar-span">疾病明细</span></mt-tab-item>
        <mt-tab-item id="3"><span class="mint-navbar-span">津贴明细</span></mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
         <div class="infoContent"> 
           <h3 class='infoTitle'>费用给付明细</h3>
           <ul class="container" v-show='false'>
               <li>
                   <span>医疗费用类别</span>
                   <span>-</span>
               </li>
               <li>
                   <span>费用开始日期</span>
                   <span>-</span>
               </li>
               <li>
                   <span>费用结束日期</span>
                   <span>-</span>
               </li>
               <li>
                   <span>实际赔付金额</span>
                   <span>-</span>
               </li>
               <li>
                   <span>免赠金额</span>
                   <span>-</span>
               </li>
               <li>
                   <span>拒付金额</span>
                   <span>-</span>
               </li>
           </ul>
            <div class="tip">对不起，没有找到您要查询的数据</div>
        </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
         <div class="infoContent"> 
           <h3 class='infoTitle'>疾病给付明细</h3>
            
           <ul class="container">
               <li>
                   <span>疾病代码</span>
                   <span>M80000/3</span>
               </li>
               <li>
                   <span>疾病名称</span>
                   <span>恶性肿瘤</span>
               </li>
               <li>
                   <span>计算赔付级别</span>
                   <span>0</span>
               </li>
               <li>
                   <span>给付金额</span>
                   <span>100000.00</span>
               </li>
           </ul>
        </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
         <div class="infoContent"> 
           <h3 class='infoTitle'>津贴给付明细</h3>
           <ul class="container" v-show='false'>
               <li>
                   <span>疾病代码</span>
                   <span>M80000/3</span>
               </li>
               <li>
                   <span>疾病名称</span>
                   <span>恶性肿瘤</span>
               </li>
               <li>
                   <span>津贴开始日期</span>
                   <span>-</span>
               </li>
               <li>
                   <span>津贴结束日期</span>
                   <span>-</span>
               </li>
               <li>
                   <span>给付津贴天数</span>
                   <span>-</span>
               </li>
               <li>
                   <span>申请给付津贴天数</span>
                   <span>-</span>
               </li>
               <li>
                   <span>给付金额</span>
                   <span>-</span>
               </li>
           </ul>
          <div class='tip'>对不起，没有找到你要查询的数据</div>
        </div>
        </mt-tab-container-item>
         
    </mt-tab-container>
    <Tablebar></Tablebar>
</div>
</template>


<script>
    import Tablebar from './../components/adminbar.vue'
    export default {
        name:'adminpayinfo',
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
                }, ]
            }
        },
        created() {
          
        }

    }

</script>


<style scoped>
    .infoContent {
        margin-top: 10px;
    }
    
    .mint-navbar a.mint-tab-item.is-selected {
        border-bottom: 3px solid #1D9F49;
        color: #1D9F49;
    }
    .tip {
        line-height: 40px;
        height: 40px;
        text-align: center;
        font-size: 1.2rem;
        border:2px solid #dfdfdf;
        background-color: #fff;
    }
 
</style>
