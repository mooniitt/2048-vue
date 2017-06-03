<template>
	<div class="body">
		<Vrect></Vrect>
	</div>
</template>

<script>
import Vrect from './Vrect'
	export default{
		name:'body',
		components:{
			Vrect
		}
	}
</script>

<style>
	.body{
		width: 100%;
		height: 400px;
		background-color: #234;
		position: absolute;
		top: 120px;
	}
</style>