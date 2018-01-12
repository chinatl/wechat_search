<template>
    <div class='layout'>
        <mt-header title="保全变更"></mt-header>
      	<div class="searchBox">
	  		<div class="searchTable">
	            <p><label for="">保险合同号：</label><input type="number" placeholder='请正确填写'></p>
	            <p><label for="">账户类型：</label><input type="text"  placeholder='请正确填写'></p>
	            <p style="position: relative">
	                <label for="">起止开户日期：</label>
	                <input type="text"  placeholder='请正确填写' v-model='startTime'>
	                <i class="fa fa-table" aria-hidden="true"  @click='openPicker'></i> 
	            </p>
	            <p style="position: relative">
	                <label for="">终止开户日期：</label>
	                <input type="text"  placeholder='请正确填写' v-model='endTime'>
	                <i class="fa fa-table" aria-hidden="true"  @click='openPicker1'></i>     
	            </p>
	            <p><label for="">证件类型：</label><input type="text" placeholder='请正确填写'></p>
	            <p><label for="">证件号码：</label><input type="number" placeholder='请正确填写'></p>
	            <p><label for="">员工姓名：</label><input type="text" placeholder='请正确填写'></p>
	            <p><label for="">选择图片：</label><button @click='photo'>选择</button></p>
	        </div>
        <input type="button" value="更改" class='seachBtn'>     
        </div>
        <mt-actionsheet
        :actions="actions"
        v-model="sheetVisible">
        </mt-actionsheet>
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
    import {format} from './../util/index.js';
    export default {
        data() {
            return {
                actions: [{
                    name: '拍照',
                    method: this.a
                }, {
                    name: '从相册中选择',
                    method: this.b
                }],
                pickerValue: new Date(),
                pickerValue1: new Date(),
                beginDate: new Date(),
                startTime: '',
                endTime: '',
                boxstatus: false,
                sheetVisible: false,
            }
        },
        created() {

        },
        methods: {
            photo() {
                this.sheetVisible = true;
            },
            a() {
                console.log(1)
            },
            b() {
                console.log(2)
            },
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
                this.startTime = CM.format(err);
                this.pickerValue1 = err;
            },
            handleConfirm1(err) {
                this.endTime = CM.format(err)
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
            },
        }
    }
</script>


<style scoped>
    .containerItem {
        overflow: hidden
    }
</style>