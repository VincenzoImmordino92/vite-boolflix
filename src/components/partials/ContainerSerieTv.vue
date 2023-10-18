<script>
import Card from './Card.vue'
import { store } from '../../data/store';

export default{
  name:'ContainerSerieTv',
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
  <div class="container_custom_serietv">
    <h1>{{ title }}</h1>
    <div class="row row-cols-4">
    <Card v-for="card in store[type]" :key="card.id" :card="card"/>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>