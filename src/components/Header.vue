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
    getApi(type){
      axios.get(store.apiUrl + type,{
        params: store.apiParams
      })
      .then(res => {
        store[type] = res.data.results;
        console.log(store.movie);
        console.log(store.tv);
        
      })
      .catch(err =>{
        console.log(err);
      })
    },
    startSearch(){
      this.getApi('movie') 
      this.getApi('tv')
    }
  },
  mounted(){
    /* this.startSearch() */
  }
}

</script>

<template>
  <div class="row">
    <div class="col custom">
      <Logo />
      <SearchBar @startSearch="startSearch"/> 
    </div>
  </div>
</template>

<style lang="scss">
.custom{
  display: flex;
  justify-content: space-between;
}
</style>