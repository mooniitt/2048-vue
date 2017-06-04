<template>
  <div id="app">
    <Borard></Borard>
  </div>
</template>

<script>
import Borard from './components/Borard'
export default {
  name: 'app',
  components: {
    Borard
  },
  methods:{
    control(){
      document.addEventListener('keyup',(e)=>{
        var code = e.keyCode
        switch(code){
          case 38:// 上
          case 87:console.log('up')
          this.$store.commit('onUp')
          this.$store.commit('score')
          break 
          case 40:// 下
          case 83:console.log('down')
          this.$store.commit('onDown')
          this.$store.commit('score')
          break
          case 37:// 左
          case 65:console.log('left')
          this.$store.commit('onLeft')
          this.$store.commit('score')
          break
          case 39:// 右
          case 68:console.log('right')
          this.$store.commit('onRight')
          this.$store.commit('score')
          break
          case 82:
          this.$store.commit('restart')
          break
          default:break
        }
      })
    }
  },
  mounted(){
    this.control()
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
