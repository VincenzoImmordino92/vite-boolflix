<script>

export default{
  name:'Card',
  props:{
    card: Object
  }
}

</script>

<template>
  <div class="card_custom">
      <div class="box_image">
        <img  :src="`https://image.tmdb.org/t/p/w342/${card.poster_path}`" :alt="card.title || card.name">
      </div>
      <div>
        <h5 class="card-title">{{ card.title || card.name }}</h5>
        <h5 class="card-title">{{ card.original_title || card.original_name}}</h5>
        <p class="card-text">Lingua:{{ card.original_language }}</p>
        <p class="card-text">Voto:{{ card.vote_average }}</p>  
      </div>
  </div>

  
</template>

<style lang="scss" scoped>
.card_custom{
  background-color: black;
  width: 200px;
  height:300px;
  padding: 10px;
  margin: 12px;
  .box_image{
    width: 100%;
    img{
      width:100% ;
    }
  }
}
</style>