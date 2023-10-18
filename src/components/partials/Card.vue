<script>

export default{
  name:'Card',
  data(){
    return{
      flags:['en','it']
    }
  },
  props:{
    card: Object
  },
  methods:{ 
    getImagePath(img){
      return new URL(`../../assets/img/${img}.png`, import.meta.url).href
    }
  },
  computed:{
    stars(){
      return Math.floor(this.card.vote_average / 2)
    }
  }
}

</script>

<template>
  <div class=" box_card d-flex justify-content-between">
    <div class="card_custom">
        <div class="box_image">
          <img v-if="card.poster_path" :src="`https://image.tmdb.org/t/p/w342/${card.poster_path}`" :alt="card.title || card.name">
          <img v-else src="/public/No-Image-Placeholder.svg.png" :alt="card.title || card.name">
        </div>
        
        <div class="box_info d-flex flex-column justify-content-between">
          <h5 class="card_title_name_custom">{{ card.title || card.name }}</h5>
          <h6 class="card_original_custom">{{ card.original_title || card.original_name}}</h6>
          <img v-if="flags.includes(card.original_language)" :src="getImagePath(card.original_language)" :alt="card.original_language">
          <p v-else class="card-text">Lingua: {{ card.original_language }}</p>
          
          <p class="overview">Informazioni:<br>{{ card.overview }}</p>
          <p class="card-text">Voto:
            <i v-for="star in 5" :key="star" class="fa-star" :class="(star <= stars) ? 'fa-solid' : 'fa-regular' "></i>
          </p>
            
            
        </div>
    </div>
  </div>

  
</template>

<style lang="scss" scoped>

.box_card{
  width: 250px;
  height: 339px;
  margin: 5px 5px 10px 0px;
    .card_custom{
      height: 100%;
      cursor: pointer;
      position: relative;
    .box_image{
      width: 100%;
      height: 100%;
        img{
          width:100%;
          height: 100%;
          object-fit: contain;
        }
    }
    .card_title_name_custom{
      font-size: 1.3rem;
    }
    .card_original_custom{
      font-size: 0.7rem;
    }
    .card-text{
      font-size: 0.89rem;
    }
    .overview{
      height: calc(100% - 180px);
      overflow-x: auto;
      &:hover{
        overflow-x: auto;
      }
    }
  
    .box_info{
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      padding: 10px 0px;
      background-color: rgba(0, 0, 0, 0.534);
      img{
        width: 25px;
        margin-left: 10px;
      }
    }
    &:hover{
        display: inline-block;
      }    
    }
  
  }
</style>