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
        
      })
    },
    startSearch(){
      store.movie = store.tv = []
      
      if(store.type == '' || store.type == 'movie'){
        this.getApi('movie')
      }
      if(store.type == '' || store.type == 'tv'){
        this.getApi('tv')
      }

      if(store.movie.length == 0 && store.tv.length == 0){
        store.error = 'Nessun Risultato trovato per "' + store.apiParams.query +'"'
      }else{
        store.error = ''
      }
    }
  },
  mounted(){
    /* this.startSearch() */
  }
}

</script>

<template>
  <div class="row custom_row">
    <div class="col custom">
      <Logo />
      <SearchBar @startSearch="startSearch"/> 
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom_row{
height: 80px;
padding: 10px 20px;
  .custom{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
}

</style>