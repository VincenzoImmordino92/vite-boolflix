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
    <div class="card-body">
      <div class="box_image">
        <img src="" alt="">
      </div>
      <h5 class="card-title">{{ card.title }}</h5>
      <h5 class="card-title">{{ card.original_title }}</h5>
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
}
</style>