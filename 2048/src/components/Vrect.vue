<template>
	<div class="vrect">
		<p>{{code}}</p>
	</div>
</template>

<script>
	export default{
		name:'vrect',
		data(){
			return {
				code:1
			}
		}
	}
</script>

<style scope>
.vrect{
	 width: 98px;
	 height: 98px;
	 margin: 0px;
	 padding: 0px;
	 border: 1px solid grey;
	 background-color: red;
}
</style>