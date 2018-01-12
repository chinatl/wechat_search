<template>
<div>
	<h1>{{msg}}</h1>
	<input type="button" value="确定" @click='getData'>
</div>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
	name: 'home',
	methods: {
		getData(){
			this.$store.commit('test','测试');
		},
	   
	},
	created(){
	}
}
</script>

<style>

</style>	