<template>
  <div id="app">
    <Borard></Borard>
  </div>
</template>

<script>
import Borard from './components/Borard'
export default {
  name: 'app',
  data(){
    return {
      btn:false
    }
  },
  components: {
    Borard
  },
  methods:{
    control(){
      document.addEventListener('keydown',(e)=>{
        if(this.btn){

        }
        this.btn = true
        var code = e.keyCode
        switch(code){
          case 38:// 上
          case 87:
          this.$store.dispatch("onUp")
          break 
          case 40:// 下
          case 83:
          // this.$store.dispatch('onDown')
          this.$store.dispatch("onDown")
          break
          case 37:// 左
          case 65:
          // this.$store.dispatch('onLeft')
          this.$store.dispatch("onLeft")
          break
          case 39:// 右
          case 68:
          // this.$store.dispatch('onRight')
          this.$store.dispatch("onRight")
          break
          case 82:
          this.$store.commit('restart')
          break
          default:break
        }
        this.$store.commit('score')
      })
    }
  },
  mounted(){
    this.control()
    this.$store.commit("start")
  }
}
  
</script>

<style>
html,body{
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}
#app {
  margin: 0 auto;
  padding: 0px;
  width: 500px;
  height: 100%;
  position: relative;
  border: 1px solid grey;
}
</style>
