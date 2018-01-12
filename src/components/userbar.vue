<template>
    <div class="userbox">
        <router-link to='/usersearch'>
            <p><icon name="align-left"></icon></p>
            <span>保单查询</span>
        </router-link>
        <router-link to='/userpay'>
           <p><icon name="align-left"></icon></p>
            <span>理赔查询</span>
        </router-link>
<!--
        <router-link to='/foud'>
          <p><icon name="align-left"></icon></p>
            <span>保全变更</span>
        </router-link>
-->
    </div>
</template>

<script>
    export default {
        name: 'tablebar',
        data() {
            return {}
        }
    }

</script>

<style>
    .userbox {
        width: 100%;
		max-width: 640px;
        position: fixed;
        height: 50px;
        bottom:0;
        left:0;
        background-color: #fff;
    }
    .userbox a {
        float: left;
        width: 50%;
        text-align: center;
        box-sizing: border-box;
        padding:10px;
    }
    .userbox a p {
        width: 100%;
        height: 16px;
    }
    .userbox a span {
        font-size: 1rem;
    }
    .router-link-exact-active {
        color: blue
    }
</style>
