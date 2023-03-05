<template>
    <div class="flex ml-[15px] ">
        
            <button class="cursor-pointer hover:bg-hover-links hover:rounded-full hover:overflow-hidden"  >
                <a  class="inline-flex bg-secondary-color rounded-full w-44 h-11 lg:w-w-230 lg:h-w-61 items-center justify-around" :href="trailerLink" target="_blank" >
                <p class="font-normal text-f16 lg:text-f21 ml-3 ">Watch thrailer</p>
                 <img class="w-w-14.66 h-h-18 lg:w-w-17.1 lg:h-h-21 mr-3" src="../assets/icon/play.svg" alt="Watch thrailer" />
                </a>
            </button>
        
    </div>
</template>
<script>
export default{
    data(){
        return{
            movieId: null,
            trailerLink: null
        }
    },
    methods: {
        getTrailer() {
            fetch('https://imdb-api.com/en/API/Trailer/k_0m1wyka7/' + this.movieId)
                .then(response => response.text())
                .then(response => JSON.parse(response))
                .then(response => {
                    this.trailerLink = response.link
                });
        }
    },
    created(){
        this.movieId = this.$route.params.movieId
        this.getTrailer()
        
    }
    
}
</script>

 
