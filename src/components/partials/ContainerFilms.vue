<script>

import { store } from '../../data/store';
import Card from './Card.vue'

export default{
  name:'ContainerFilms',
  props:{
    title:String,
    type: String
  },
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
    <h1>{{ title }}</h1>
    <div class="row">
    <Card v-for="card in store[type]" :key="card.id" :card="card"/>
      
    </div>
    
  </div>
</template>

<style lang="scss" scoped>

</style>