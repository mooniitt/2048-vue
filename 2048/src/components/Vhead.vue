<template>
	<div class="vhead">
		<Score></Score>
		<Restart></Restart>
	</div>
</template>

<script>
import Score from './Score'
import Restart from './Restart'
	export default{
		name:'vhead',
		components:{
			Score,Restart
		},
		mounted(){
			
		}
	}	
</script>

<style>
	.vhead{
		height: 120px;
		width: 100%;
		background-color: #423;
		position: absolute;
		margin: 0px;
		padding: 0px;
		top: 0px;
	}
</style>