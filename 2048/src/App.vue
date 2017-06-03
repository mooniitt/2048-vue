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
