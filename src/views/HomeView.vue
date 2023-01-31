<template>
  <main class="bg-red-400">
    <h1>hiiiiiiiiiii</h1>
  </main>
</template>

<script >
export default{
  data(){
    return{

    };
  },
  components:{
    
  },
  methods:{
    getMovie(){
      fetch('https://imdb-api.com/en/API/Title/k_81sqejxg/tt1375666/FullActor,FullCast,Posters,Images,Trailer,Ratings')
      .then(response=>response.text())
      .then(response=>JSON.parse(response))
      .then(response=>{

      });
    },
  },
  created(){
    this.getMovie()
  }
}
</script>


