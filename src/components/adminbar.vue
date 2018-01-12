<template>
    <div class="tablebox">
        <router-link to='/adminsearch'>
            <p><icon name="search"></icon></p>
            <span>保单查询</span>
        </router-link>
        <router-link to='/adminpay'>
           <p><icon name="align-left"></icon></p>
            <span>理赔查询</span>
        </router-link>
        <router-link to='/adminsave'>
           <p><icon name="sticky-note-o"></icon></p>
            <span>保全查询</span>                    
        </router-link>
        <router-link to='/adminedit'>
          <p><icon name="edit"></icon></p>
            <span>理赔变更</span>
        </router-link>
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
    .tablebox {
		width: 100%;
        position: fixed;
        height: 50px;
        bottom:0;
        left:0;
        background-color: #fff;
        z-index:20
    }
    .tablebox a {
        float: left;
        width: 25%;
        text-align: center;
        box-sizing: border-box;
        padding:10px;
    }
    .tablebox a p {
        width: 100%;
        height: 16px;
    }
    .tablebox a span {
        font-size: 1rem;
    }
    .router-link-active {
        color: blue
    }
</style>
