<template>
	<div class="borard">
		<Vhead></Vhead>
		<Vbody></Vbody>
	</div>
</template>
<script>
import Vhead from './Vhead'
import Vbody from './Vbody'
	export default {
		name:'borard',
		components:{
			Vhead,Vbody
		}
	}
</script>

<style>
.borard{
	height: 520px;
	width: 400px;
	margin: 0 auto;
	background-color: red;
	position: relative;
	box-shadow: 0 0 10px rgba(0,0,0,0.9)
}
</style>