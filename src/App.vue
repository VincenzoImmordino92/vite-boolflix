<script>

import Header from './components/Header.vue';
import Main from './components/Main.vue';
import { store } from './data/store'

export default{
  name:'App',
  data(){
    return{
      store
    }
  },

  mounted(){
    // this.getApi() 
  },
  components:{
    Header,
    Main
  },
}

</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss">

@use './scss/main.scss' as*;

</style>
