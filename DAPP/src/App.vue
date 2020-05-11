<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>
<script>
// import { Toast } from 'vant';
export default {
  data(){
    return{

    }
  }
}
</script>
<style lang="scss">
#app{
  height: 100%;
}
body,html{
    height: 100%;
}
body,p,ul,ol,dl,dd,dt,h1,h2,h3,h4,h5,input,td,select,textarea{
    padding: 0;
    margin: 0;
}
html{
  font-size: 26.67vw;
}
</style>
