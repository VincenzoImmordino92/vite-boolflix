import { reactive } from 'vue';

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/movie',
  apiParams:{
    api_key:'1ee8ae560f98fd9995ed60e79f2035be',
    language: 'it-It',
    query:'',
  },
  film: []
})