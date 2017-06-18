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
			console.log("updated")
			// console.log(this.left+":"+this.top+":"+this.color+":"+this.number)
		},
		mounted(){
			this.move()
			console.log("mounted")
			setTimeout(()=>{
				this.isBorn = false
			},400)
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
.born {
	 animation: move .3s ease;
}
@keyframes move{
	0% {transform: scale(0);opacity: 0}
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