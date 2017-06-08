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
          case 87:
          this.$store.commit('onUp')
          break 
          case 40:// 下
          case 83:
          this.$store.commit('onDown')
          break
          case 37:// 左
          case 65:
          this.$store.commit('onLeft')
          break
          case 39:// 右
          case 68:
          this.$store.commit('onRight')
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
