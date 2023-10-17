<script>
import ContainerFilms from './partials/ContainerFilms.vue';
import ContainerSerieTv from './partials/ContainerSerieTv.vue';
import { store } from '../data/store'; 


export default{
  name:'Main',
  data(){
    return{
      store
    }
  },
 /*  methods:{
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
    // this.getApi() 
  }, */
  components:{
    ContainerFilms,
    ContainerSerieTv
  }
}

</script>

<template>
  <div class="container_custom">
    <ContainerFilms  title="film" type="movie"/>
    <ContainerSerieTv title="Serie Tv" type="tv"/>

  </div>
  
</template>

<style lang="scss">
.container_custom{
  width: 80%;
  height: 90%;
  margin: 0 auto;
  margin-top: 70px;
}


</style>