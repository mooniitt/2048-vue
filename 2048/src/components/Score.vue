<template>
	<div class="score">
		<p>SCORE : {{score}}</p>
	</div>
</template>

<script>
	export default{
		name:'score',
		data(){
			return {}
		},
		computed:{
			score(){
				return this.$store.state.score
			}
		}
	}
</script>

<style scope>
	.score{
		float: left;
		width: 280px;
		height: 100%;
		padding: 0px;
		margin: 0px;
		background-color: #4A4A4A;
	}
	.score p{
		text-align: center;
		width: 100%;
		line-height: 120px;
		margin: 0px;
		padding: 0px;
		height: 100%;
		font-size: 1.6em;
		color: #F3F3F3
	}
</style>