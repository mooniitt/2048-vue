<template>
	<div class="btn" @click='restart'>
		<p>RESTART</p>
	</div>
</template>

<script>
	export default{
		name:'btn',
		data(){
			return {

			}
		},
		methods:{
			restart(){
				// console.log('restart')
				this.$store.commit('restart')
			}
		}
	}
</script>

<style>
	.btn{
		float: right;
		height: 100%;
		margin: 0px;
		padding: 0px;
		width: 120px;
		background-color: #DD8968;
	}
	.btn p {
		padding: 0px;
		margin: 0px;
		color: rgba(0,0,0,0.8);
		text-align: center;
		font-weight: bold;
		font-size: 1.5em;
		line-height: 120px;
	}
	.btn p:hover{
		cursor: pointer; 
	}
</style>
