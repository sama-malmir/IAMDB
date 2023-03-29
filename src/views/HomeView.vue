<template>

    <div class="bg-back-ground text-main-color">
    
      <CoverSite :posterList="posters" class="w-full h-h-264 lg:h-h-671" />
    

    <!-- --------first-section-------- -->
    <section class="container">
      <div class="lg:flex lg:flex-row lg:ml-[132px] lg:gap-g-60 relative lg:items-center">
        <div class="lg:-mt-52">
          <Rating :ax="imgUrl" />
          <RatingScore :ratings="imDbRating" :emtiyaz="imDbRatingVotes" />
      </div>
      <div class="lg:-mt-20">
          <TitleMovie :esmeFilm="title" :esmeKargardan="direcotr" :sal="year" :baznevisi="rated" :zamanejra="runtime" />
          <!-- --------btn-links--------- -->
          <div class="inline-flex py-6">
            <Links />
            <BtnLinks />
          </div>
          <DetailsMovie :Description="plot" :writersName="writers" :genresMovie="genres" :awardsMovie="awards" :countrises="countries" :ratings="imDbRating"/>
      </div>
      <div class="lg:-mt-52">
          <CastAndCrew :listeKameleBazigaran="listeBazigaran" />
      </div>
      </div>
    </section>
    <!-- ------photos----- -->
    <section>
      <Photos :listKameleImgs="listeImgs" />
    </section>
    <!-- --------similars------- -->
    <section>
      <Similars :fullMovies="movieList" @pleaseRerender="this.$forceUpdate()" />
    </section>
    <!-- -----------last-section------- -->
    <!-- ----FAQ---- -->
    <section>
      <Faqs :faqs="soalat" />
    </section>
  </div> 

  


</template>

<script >
import CoverSite from '../components/CoverSite.vue';
import TitleMovie from '../components/TitleMovie.vue';
import Links from '../components/Links.vue';
import BtnLinks from '../components/BtnLinks.vue';
import CastAndCrew from '../components/CastAndCrew.vue';
import Photos from '../components/Photos.vue';
import DetailsMovie from '../components/DetailsMovie.vue';
import Similars from '../components/Similars.vue';
import Faqs from '../components/Faqs.vue';
import Rating from '../components/Rating.vue';
import RatingScore from '../components/RatingScore.vue';
export default {
  data() {
    return {
      posters:{},
      imgUrl:null,
      title:null,
      direcotr:null,
      year:null,
      rated:null,
      runtime:null,
      plot:null,
      writers:null,
      genres:null,
      awards:null,
      countries:null,
      imDbRating:null,
      imDbRatingVotes:null,
      listeBazigaran: {},
      listeImgs:{},
      movieList:{},
      soalat:{},
      movieId: null,

    };
    },
  components: {
    CoverSite,
    CastAndCrew,
    TitleMovie,
    BtnLinks,
    Links,
    DetailsMovie,
    Photos,
    Similars,
    Faqs,
    Rating,
    RatingScore,
},
  methods: {
    getPoster(){
      fetch('https://imdb-api.com/en/API/Posters/k_0m1wyka7/'+ this.movieId)
      .then(response => response.text())
      .then(response => JSON.parse(response))
      .then(response => {
        if(response.backdrops.length > 0){
          this.posters = response.backdrops[0].link
        }else{
          this.posters = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmNO8FnHZhWB0Z7zjz7f36NmTIxjbJPWBWmQ&usqp=CAU'
        }
       
      });
    },
    getMovie() {
      fetch('https://imdb-api.com/en/API/Title/k_0m1wyka7/' + this.movieId + '/FullActor,FullCast,Posters,Images,Trailer,Ratings')
        .then(response => response.text())
        .then(response => JSON.parse(response))
        .then(response => {
          this.imgUrl=response.image,
          this.title=response.title,
          this.direcotr=response.directors,
          this.year=response.year,
          this.rated=response.contentRating,
          this.runtime=response.runtimeStr,
          this.plot=response.plot,
          this.writers=response.writers,
          this.genres=response.genres,
          this.awards=response.awards,
          this.countries=response.countries,
          this.imDbRating=response.imDbRating,
          this.imDbRatingVotes=response.imDbRatingVotes,
          
          this.listeBazigaran = response.actorList,
          this.listeImgs=response.images.items.slice(0,10)
          this.movieList=response.similars.slice(0,11)
          document.title = this.title
        });
    },
    getFAQ(){
      fetch('https://imdb-api.com/en/API/FAQ/k_0m1wyka7/' + this.movieId)
        .then(responseFAQ=>responseFAQ.text())
        .then(responseFAQ=> JSON.parse(responseFAQ))
        .then(responseFAQ=>{
          this.soalat=responseFAQ.items
        });
    },
  },
  created() {
    this.movieId = this.$route.params.movieId
    this.getMovie()
    this.getFAQ()
    this.getPoster()
  },
}
</script>


