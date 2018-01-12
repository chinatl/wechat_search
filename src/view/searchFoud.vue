<template>
    <div class='layout'>
      <mt-header title="基金账户查询"></mt-header>
      <div class="searchBox">
      <div  class="searchTable">
          <p><label for="">保险合同号：</label><input type="number" placeholder='请正确填写'></p>
          <p><label for="">账户类型：</label><input type="text"  placeholder='请正确填写'></p>
          <p style="position: relative">
              <label for="">起止开户日期：</label>
              <input type="text"  placeholder='请正确填写' v-model='startTime'>
              <i class="fa fa-table" @click='openPicker'>1</i> 
          </p>
          <p style="position: relative">
            <label for="">终止开户日期：</label>
            <input type="text"  placeholder='请正确填写' v-model='endTime'>
            <i class="fa fa-table" aria-hidden="true"  @click='openPicker1'>1</i>     
          </p>
        <p><label for="">证件类型：</label><input type="text"  placeholder='请正确填写'></p>
        <p><label for="">证件号码：</label><input type="number"  placeholder='请正确填写'></p>
        <p><label for="">员工姓名：</label><input type="text"  placeholder='请正确填写'></p>

      </div>
       <input type="button" value="查询" class='seachBtn'>     
        <input type="button" value="重置" class='seachBtn resetBtn'>
      </div>

        <div class="infoContent"> 
           <h3 class='infoTitle'>基金险账户列表</h3>
           <ul class="container">
               <li>
                   <span>账户</span>
                   <span>201410233y</span>
               </li>
               <li>
                   <span>开户日期</span>
                   <span>2014-05-01</span>
               </li>
               <li>
                   <span>账户余额</span>
                   <span>789677.19</span>
               </li>
               <li>
                   <span>本金余额</span>
                   <span>789677.19</span>
               </li>
               <li>
                   <span>利息金额</span>
                   <span>0.00</span>
               </li>
               <li>
                   <span>账户状态</span>
                   <span>正常</span>
               </li>
               <li>
                   <span>销户日期</span>
                   <span>9999-12-31</span>
               </li>
               <li>
                   <span>保单币种</span>
                   <span>人民币元</span>
               </li>
           </ul>
           <input type="button" value="查询" class='seachBtn' @click='openBox'>
        </div>
        <div class='detailfoud' v-show='boxstatus' @click='closeBox' ref='detailfoud'>
            <div class='detailfoud_box'>
               <div class='title'>基金险详情<span class="closeBox fa fa-times" @click='hideBox'>x</span></div>
                <ul>
                   <li style='color:#199660;font-size:1.1rem;'>基金险账户详细列表</li>
                    <li>
                        <span style='visibility:hidden'>'</span>
                        <span>发生日期</span>
                        <span>项目名称</span>
                        <span>收付类型</span>
                        <span>发生额</span>
                    </li>
                    <li>
                        <span>1</span>
                        <span>2014-05-01</span>
                        <span>缴费</span>
                        <span>收费</span>
                        <span>235891.35</span>
                    </li>
                    <li>
                        <span>2</span>
                        <span>2014-05-01</span>
                        <span>管理费</span>
                        <span>收费</span>
                        <span>4814.11</span>
                    </li>
                    <li>
                       <span>3</span>
                        <span>2014-07-28</span>
                        <span>个人选择</span>
                        <span>收费</span>
                        <span>2000.00</span>
                    </li>
                    <li>
                       <span>4</span>
                        <span>2014-07-28</span>
                        <span>结算利息</span>
                        <span>收费</span>
                        <span>1.21</span>
                    </li>
                </ul>
            </div>
        </div>
      <mt-datetime-picker
        ref="picker"
        type="date"
         @confirm="handleConfirm"
        v-model="pickerValue">
      </mt-datetime-picker>
      <mt-datetime-picker
        ref="picker1"
        type="date"
         @confirm="handleConfirm1"
        v-model="pickerValue1">
      </mt-datetime-picker>
    </div>
</template>


<script>
import {format} from './../util/index.js'
    export default {
        data() {
            return {
                pickerValue: new Date(),
                pickerValue1: new Date(),
                beginDate: new Date(),
                startTime: '',
                endTime: '',
                boxstatus: false
            }
        },
        created() {

        },
        methods: {
            openList(i) {
                this.data[i].value = !this.data[i].value;
            },
            openPicker() {
                this.$refs.picker.open();
            },
            openPicker1() {
                this.$refs.picker1.open();
            },
            handleConfirm(err) {
                this.startTime = format(err);
                this.pickerValue1 = err;
            },
            handleConfirm1(err) {
                this.endTime = format(err)
            },
            openBox() {
                this.boxstatus = true;
            },
            hideBox() {
                this.boxstatus = false;
            },
            closeBox(e) {
                if (e.target === this.$refs.detailfoud) {
                    this.boxstatus = false;
                }
            }
        }
    }

</script>


<style scoped>
    .containerItem {
        overflow: hidden
    }
    .detailfoud {
     position: fixed;
     top: 0;
     left: 0;
     bottom: 0;
     right: 0;
     background-color: rgba(0, 0, 0, .5);
 }
 
 .detailfoud_box {
     width: 94%;
     position: absolute;
     top: 20%;
     left: 50%;
     transform: translate(-50%, 0);
     background-color: #fff;
     padding-bottom: 6px;
 }
 
 .detailfoud_box .title {
     height: 40px;
     background-color: #009B62;
     line-height: 40px;
     color: #fff;
     position: relative;
     padding-left: 10px;
     font-size: 1.2rem;
     margin-bottom: 5px;
 }
 
 .detailfoud_box .closeBox {
     position: absolute;
     top: 12px;
     right: 10px;
     font-size: 1.5rem
 }
 
 .detailfoud_box ul {
     background-color: #fff;
     width: 94%;
     margin: 0 auto;
 }
 
 .detailfoud_box ul li {
     width: 100%;
     height: 30px;
     line-height: 30px;
     padding-left: 6px;
     overflow: hidden;
 }
 
 .detailfoud_box ul li:nth-of-type(even) {
     background-color: #f8f8f8;
 }
 
 .detailfoud_box ul li span {
     display: inline-block;
     float: left;
     text-align: center;
 }
 
 .detailfoud_box ul li span:nth-of-type(1) {
     width: 5%;
 }
 
 .detailfoud_box ul li span:nth-of-type(2) {
     width: 30%;
 }
 
 .detailfoud_box ul li span:nth-of-type(3) {
     width: 20%;
 }
 
 .detailfoud_box ul li span:nth-of-type(4) {
     width: 20%;
 }
 
 .detailfoud_box ul li span:nth-of-type(5) {
     width: 25%;
 }

</style>
