<script>

import { store } from '../../data/store';

export default{
  name:'SearchBar',
  data(){
    return{
      store
    }
    
  }
}

</script>

<template>
  <div class="custom ">
    <div class="input-group">
      <input  v-model.trim="store.apiParams.query" type="text" class="form-control" placeholder="Cerca Film o Serie Tv" @keyup.enter="$emit('startSearch')">
    </div>
    <select v-model="store.type" @change="$emit('startSearch')" class="form-select" aria-label="Default select example">
      <option selected>Seleziona il genere</option>
      <option value="">All</option>
      <option value="movie">Film</option>
      <option value="tv">Serie Tv</option>
    </select>

  </div>
</template>

<style lang="scss" scoped>

</style>