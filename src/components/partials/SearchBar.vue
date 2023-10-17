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
  <div class="custom">
    <div class="input-group mb-3 ">
      <span class="input-group-text" id="inputGroup-sizing-default"></span>
      <input  v-model.trim="store.apiParams.query" type="text" class="form-control" placeholder="Cerca un film o serie tv" @keyup.enter="$emit('startSearch')">
    </div>
    <select  class="form-select" aria-label="Default select example">
      <option selected>Seleziona il genere</option>
      <option value="">All</option>
      <option value="film">Film</option>
      <option value="tv">Serie Tv</option>
    </select>

  </div>
</template>

<style lang="scss" scoped>

</style>