<template>
	<div class="body">
		<Vrect v-for='data of states'  
			v-bind:key="data[4]" 
			v-bind:left="data[0]"
	 		v-bind:top="data[1]" 
	 		v-bind:color="data[2]" 
	 		v-bind:number="data[3]">
	 	</Vrect>
	</div>
</template>

<script>
import Vrect from './Vrect'
	export default{
		name:'body',
		computed:{
			states(){
				return this.$store.getters.datafilter
			}
		},
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