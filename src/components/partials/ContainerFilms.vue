<script>

import { store } from '../../data/store';
import Card from './Card.vue'

export default{
  name:'ContainerFilms',
  data(){
    return{
      store
    }
  }, 
  components:{
    Card
  }
}

</script>

<template>
  <div class="container_custom_film">
    <h1>Film</h1>
    <div class="row row-cols-4">
    <Card v-for="card in store.film" :key="card.id" :card="card"/>
      
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
.container_custom_film{
  background-color: gray;
  border: 1px solid white;
  margin-bottom: 50px;
}
</style>