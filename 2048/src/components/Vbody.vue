<template>
	<div class="body">
		<Vrect v-for='(state,index) in states' :key="state[4]"
				v-bind:left="state[0]"
		 		v-bind:top="state[1]" 
		 		v-bind:color="state[2]" 
		 		v-bind:number="state[3]">
		 </Vrect>
	</div>
</template>

<script>
import Vrect from './Vrect'
	export default{
		name:'body',
		data(){
			return {

			}
		},
		methods:{
			
		},
		computed:{
			states(){
				return this.$store.state.data
			}
		},
		components:{
			Vrect
		},
		mounted(){
			// console.log(this.states)
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