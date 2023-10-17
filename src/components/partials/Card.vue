<script>

export default{
  name:'Card',
  props:{
    card: Object
  },
  computed:{
    stars(){
      return Math.floor(this.card.vote_average / 2)
    }
  }
}

</script>

<template>
  <div class="col-3">
    <div class="card_custom">
        <div class="box_image">
          <img  :src="`https://image.tmdb.org/t/p/w342/${card.poster_path}`" :alt="card.title || card.name">
        </div>
        
        <div class="box_info" type="animation">
          <h5 class="card-title">{{ card.title || card.name }}</h5>
          <h6 class="card-title">{{ card.original_title || card.original_name}}</h6>
          <p class="card-text"><img :src="`/public/${ card.original_language }.png`" :alt="card.original_language"></p>
          <p class="card-text">Voto:
            <i v-for="star in stars" :key="star" class="fa-solid fa-star"></i>
            <i v-for="star in (5- stars)" :key="star" class="fa-regular fa-star"></i>
            
          </p>  
        </div>
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
  cursor: pointer;
  position: relative;
  .box_image{
    width: 100%;
    img{
      width:100% ;
    }
  }
  .box_info{
    display: none;
    position: absolute;
    top: 20px;
  }
  &:hover{
    .box_info{
      display: inline-block;
    }    
  }
}
</style>