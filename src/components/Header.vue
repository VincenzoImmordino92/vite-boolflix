<script>
import axios from 'axios';
import Logo from './partials/Logo.vue';
import SearchBar from './partials/SearchBar.vue';

import { store } from '../data/store'; 


export default{
  name:'Header',
  data(){
    return{
      store
    }
  },
  components:{
    Logo,
    SearchBar
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl ,{
        params: store.apiParams
      })
      .then(res => {
        store.film = res.data.results;
        console.log(store.film);
      })
      .catch(err =>{
        console.log(err);
      })
    }
  },
  mounted(){
    this.getApi() 
  }
}

</script>

<template>
  <div class="row">
    <div class="col custom">
      <Logo />
      <SearchBar @startSearch="getApi"/> 
    </div>
  </div>
</template>

<style lang="scss">
.custom{
  display: flex;
  justify-content: space-between;
}
</style>