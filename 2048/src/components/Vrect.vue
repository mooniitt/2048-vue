<template>
	<div class="vrect" :class="{born:isBorn}">
		<p>{{number}}</p>
		<span>{{color}}{{top}}{{left}}</span>
	</div>
</template>

<script>
	export default{
		name:'vrect',
		data(){
			return {
				isBorn:true
			}
		},
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
		},
		mounted(){
			this.move()
			setTimeout(()=>{
				this.isBorn = false
			},100)
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
	 transition: all .1s ease;
}
.born {
	 transform: scale(0);
	 animation: move .05s .1s ease forwards;
}
@keyframes move{
	0% {transform: scale(0.5);opacity: 0.5}
	80% {transform: scale(1.1);opacity: 0.5;}
	100% {transform: scale(1);opacity: 1;}
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