<template>
     <router-view style='max-width:640px;margin:0 auto'></router-view>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
/*1 清楚标签的padding 和 margin*/

body, div, p, h1, h2, h3, h4, ul, li, dl, dt, dd, input, a ,ol{
    padding: 0;
    margin: 0;
}

/*2 清楚li标签的样式*/

li {
    list-style: none;
}

/*3 清除a标签的样式和颜色*/

a {
    text-decoration: none;
    color: #363636;
}

/*a:hover {*/
/*color: #c81623;*/
/*}*/

b, s, i, em {
    font-style: normal;
    font-weight: normal;
    text-decoration: none;
}

/*4 清除浮动*/

.clearfix:after {
    content: "";
    height: 0;
    line-height: 0;
    display: block;
    clear: both;
    visibility: hidden;
}

.clearfix {
    zoom: 1;
}

/*5 清除边框*/

input {
    border: none;
    outline: 0;
}

/*6 浮动*/

.fl {
    float: left;
}

.fr {
    float: right;
}

/*版心*/

.con {
    width: 1200px;
    margin: 0 auto;
}

/*通用*/

.pr {
    position: relative;
}

.pa {
    position: absolute;
}

.pf {
    position: fixed;
}

.vam {
    vertical-align: middle;
}

/*全局样式*/
body {
    font: 14px/1.5 '\5FAE\8F6F\96C5\9ED1',tahoma,'\5b8b\4f53',sans-serif;
}

.ht {
    overflow: hidden;
    text-indent: -9999px;
    text-decoration: none
}
img {
    border: 0;
    border-radius: 5px;
}
</style>
