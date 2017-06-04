<template>
	<div class="body">
		<Vrect v-for='index in states.length' :key='index'
				v-bind:left="states['left'][index-1]"
		 		v-bind:top="states['top'][index-1]" 
		 		v-bind:color="states['color'][index-1]" 
		 		v-bind:number="states['number'][index-1]">
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
				console.log(this.$store.state.top)
				return this.$store.state
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