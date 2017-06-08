<template>
	<div class="vrect" >
		<p>{{number}}</p>
	</div>
</template>

<script>
	export default{
		name:'vrect',
		props:['left','top','color','number'],
		methods:{
			move(){
				const style = this.$el.style
				style.left = this.left
				style.top = this.top
				style.backgroundColor =this.color
			}
		},
		updated(){	
			this.move()
			// console.log(this.left+":"+this.top+":"+this.color+":"+this.number)
		},
		mounted(){
			this.move()
			// console.log(this.left+":"+this.top+":"+this.color+":"+this.number)
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
	 left:300px;
	 top: 200px;
	 position: absolute;
	 transition: all .2s ease;
}
.vrect span {
	display: none;
}
.vrect p{
	margin: 0px;
	padding: 0px;
	line-height: 98px;
	height: 100%;
	width: 100%;
	font-size: 2.4em;
	text-align: center;
}
</style>