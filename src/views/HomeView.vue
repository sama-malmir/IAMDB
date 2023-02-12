<template>
  <div class="bg-back-ground text-main-color">
    <CoverSite />
    <!-- --------first-section-------- -->
    <section class="container">
      <div class="lg:flex lg:flex-row lg:ml-[132px] lg:gap-g-60">
        <div class="lg:-mt-52">
          <Rating :ax="imgUrl" />
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
      <div class="lg:-mt-40">
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
      <Similars :fullMovies="movieList" />
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
export default {
  data() {
    return {
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

      listeBazigaran: {},
      listeImgs:{},
      movieList:{},
      soalat:{},


      movieData: {
        "id": "tt0371746",
        "title": "Iron Man",
        "originalTitle": "",
        "fullTitle": "Iron Man (2008)",
        "type": "Movie",
        "year": "2008",
        "image": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_Ratio0.6762_AL_.jpg",
        "releaseDate": "2008-05-02",
        "runtimeMins": "126",
        "runtimeStr": "2h 6min",
        "plot": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        "plotLocal": "",
        "plotLocalIsRtl": false,
        "awards": "Nominated for 2 Oscars, 22 wins & 73 nominations total",
        "directors": "Jon Favreau",
        "directorList": [
          {
            "id": "nm0269463",
            "name": "Jon Favreau"
          }
        ],
        "writers": "Mark Fergus, Hawk Ostby, Art Marcum",
        "writerList": [],
        "stars": "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
        "starList": [],
        "actorList": [
          {
            "id": "nm0000375",
            "image": "https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_Ratio0.7273_AL_.jpg",
            "name": "Robert Downey Jr.",
            "asCharacter": "Tony Stark"
          },
          {
            "id": "nm0005024",
            "image": "https://m.media-amazon.com/images/M/MV5BMTk3NTY4NzgyOV5BMl5BanBnXkFtZTcwODEzNTkxNg@@._V1_Ratio0.8182_AL_.jpg",
            "name": "Terrence Howard",
            "asCharacter": "Rhodey"
          },
          {
            "id": "nm0000313",
            "image": "https://m.media-amazon.com/images/M/MV5BNTU1NjM4MDYzMl5BMl5BanBnXkFtZTcwMjIwMjMyMw@@._V1_Ratio0.7273_AL_.jpg",
            "name": "Jeff Bridges",
            "asCharacter": "Obadiah Stane"
          },
          {
            "id": "nm0000569",
            "image": "https://m.media-amazon.com/images/M/MV5BNzIxOTQ1NTU1OV5BMl5BanBnXkFtZTcwMTQ4MDY0Nw@@._V1_Ratio0.7273_AL_.jpg",
            "name": "Gwyneth Paltrow",
            "asCharacter": "Pepper Potts"
          },
          {
            "id": "nm0004753",
            "image": "https://m.media-amazon.com/images/M/MV5BMTg2NzAzNzE5N15BMl5BanBnXkFtZTcwMjMyODM0MQ@@._V1_Ratio0.7727_AL_.jpg",
            "name": "Leslie Bibb",
            "asCharacter": "Christine Everhart"
          },
          {
            "id": "nm0869467",
            "image": "https://m.media-amazon.com/images/M/MV5BZjVmYTE0ZmItYzZhMC00OTA2LWIxYWEtYjQ4NGQ2OTQyZGY2XkEyXkFqcGdeQXVyMTE2MzE4NzQ@._V1_Ratio0.7727_AL_.jpg",
            "name": "Shaun Toub",
            "asCharacter": "Yinsen"
          },
          {
            "id": "nm0846687",
            "image": "https://m.media-amazon.com/images/M/MV5BOTJhNTI0Y2UtMmUxOC00MTllLTgxNmEtOTFkMjM5ZjM5ZTE2XkEyXkFqcGdeQXVyODM2NDkzODA@._V1_Ratio1.4091_AL_.jpg",
            "name": "Faran Tahir",
            "asCharacter": "Raza"
          },
          {
            "id": "nm0163988",
            "image": "https://m.media-amazon.com/images/M/MV5BYzNmNDE1NTMtZDAyZS00NmQxLWE5MWMtYjVhNWJlMDA2YjE1XkEyXkFqcGdeQXVyNTAzMTQyNA@@._V1_Ratio0.8636_AL_.jpg",
            "name": "Clark Gregg",
            "asCharacter": "Agent Coulson"
          },
          {
            "id": "nm0810488",
            "image": "https://m.media-amazon.com/images/M/MV5BMTMyMDg2MjgwN15BMl5BanBnXkFtZTcwMjYxMDAxNA@@._V1_Ratio0.7273_AL_.jpg",
            "name": "Bill Smitrovich",
            "asCharacter": "General Gabriel"
          },
          {
            "id": "nm0046223",
            "image": "https://m.media-amazon.com/images/M/MV5BOTc4ZGE4YjUtZDdhOC00MTYwLWE2NDItN2U0NDVjMTVmOGM4XkEyXkFqcGdeQXVyMjUzNTM0Ng@@._V1_Ratio0.7273_AL_.jpg",
            "name": "Sayed Badreya",
            "asCharacter": "Abu Bakaar"
          },
          {
            "id": "nm0079273",
            "image": "https://m.media-amazon.com/images/M/MV5BODRmNzI3MzUtODFiOS00MWMxLWI2MWYtMGMxZjI4Nzc1NDA5XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio1.5000_AL_.jpg",
            "name": "Paul Bettany",
            "asCharacter": "JARVIS (voice)"
          },
          {
            "id": "nm0269463",
            "image": "https://m.media-amazon.com/images/M/MV5BNjcwNzg4MjktNDNlMC00M2U1LWJmMjgtZTVkMmI4MDI2MTVmXkEyXkFqcGdeQXVyMjI4MDI0NTM@._V1_Ratio0.7273_AL_.jpg",
            "name": "Jon Favreau",
            "asCharacter": "Hogan"
          },
          {
            "id": "nm0082526",
            "image": "https://m.media-amazon.com/images/M/MV5BMTA4NDg5MTc4NzNeQTJeQWpwZ15BbWU3MDEyMDIwNjE@._V1_Ratio0.7273_AL_.jpg",
            "name": "Peter Billingsley",
            "asCharacter": "William Ginter Riva"
          },
          {
            "id": "nm0347375",
            "image": "https://m.media-amazon.com/images/M/MV5BNGUyYjFjOTYtNDg2NS00Y2RjLThlZGEtM2MyOThjOGU0YmMzXkEyXkFqcGdeQXVyNDgzNzc4Njg@._V1_Ratio1.5000_AL_.jpg",
            "name": "Tim Guinee",
            "asCharacter": "Major Allen"
          },
          {
            "id": "nm0528164",
            "image": "https://m.media-amazon.com/images/M/MV5BOTQ1MjE3NDM1OF5BMl5BanBnXkFtZTcwNjg1NDIzMQ@@._V1_Ratio0.8182_AL_.jpg",
            "name": "Will Lyman",
            "asCharacter": "Award Ceremony Narrator (voice)"
          },
          {
            "id": "nm0603780",
            "image": "https://m.media-amazon.com/images/M/MV5BMzQyNjc0NTA5Ml5BMl5BanBnXkFtZTcwNTYwMDc4Ng@@._V1_Ratio0.7273_AL_.jpg",
            "name": "Tom Morello",
            "asCharacter": "Guard"
          },
          {
            "id": "nm0434879",
            "image": "https://m.media-amazon.com/images/M/MV5BMzljYTNiYWQtNmY3My00OWVmLThkNzktNTM2YjhlZGY5ZjA4XkEyXkFqcGdeQXVyNDE1MzY2OA@@._V1_Ratio0.7273_AL_.jpg",
            "name": "Marco Khan",
            "asCharacter": "Guard"
          },
          {
            "id": "nm0435771",
            "image": "https://m.media-amazon.com/images/M/MV5BZGZlNzAzOWYtZmJhNy00OWY4LTliNjQtOTE4NTM5MGQ4MjJmXkEyXkFqcGdeQXVyNTE0MTEwMg@@._V1_Ratio1.3182_AL_.jpg",
            "name": "Dastan Khalili",
            "asCharacter": "Guard (as Daston Kalili)"
          },
          {
            "id": "nm2789241",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Ido Mor",
            "asCharacter": "Guard (as Ido Ezra)"
          },
          {
            "id": "nm1080555",
            "image": "https://m.media-amazon.com/images/M/MV5BZmVkMGRjNTgtOWFmMi00OGYzLWIxOGMtYTg1MTI0YTA2ZDU4XkEyXkFqcGdeQXVyNDM0NjA5MQ@@._V1_Ratio0.7273_AL_.jpg",
            "name": "Kevin Foster",
            "asCharacter": "Jimmy"
          },
          {
            "id": "nm2111652",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Garret Noël",
            "asCharacter": "Pratt (as Garrett Noel)"
          },
          {
            "id": "nm0918814",
            "image": "https://m.media-amazon.com/images/M/MV5BZjc1M2RhNjktMjE2Zi00NTNlLTg4ZTktY2NlOWJiYWQ4ZDMxL2ltYWdlXkEyXkFqcGdeQXVyMTQ1MTA3Mzg@._V1_Ratio1.5000_AL_.jpg",
            "name": "Eileen Weisinger",
            "asCharacter": "Ramirez"
          },
          {
            "id": "nm0014135",
            "image": "https://m.media-amazon.com/images/M/MV5BMTY0Mjc4OTEyN15BMl5BanBnXkFtZTcwOTczNjAzMQ@@._V1_Ratio1.0909_AL_.jpg",
            "name": "Ahmed Ahmed",
            "asCharacter": "Ahmed"
          },
          {
            "id": "nm2390252",
            "image": "https://m.media-amazon.com/images/M/MV5BOWQyZjhlYzItZWZkYS00MjJjLTkyMTUtNTMxMzg5MWUwYTk2XkEyXkFqcGdeQXVyOTU2NzMxOA@@._V1_Ratio0.8636_AL_.jpg",
            "name": "Fahim Fazli",
            "asCharacter": "Omar"
          },
          {
            "id": "nm0761562",
            "image": "https://m.media-amazon.com/images/M/MV5BNDEwNjc3OTA1N15BMl5BanBnXkFtZTcwMzkyNTAzMQ@@._V1_Ratio1.4091_AL_.jpg",
            "name": "Gerard Sanders",
            "asCharacter": "Howard Stark"
          },
          {
            "id": "nm0726601",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Tim Rigby",
            "asCharacter": "Viper 1"
          },
          {
            "id": "nm1212050",
            "image": "https://m.media-amazon.com/images/M/MV5BNjA0NTUwMDUyM15BMl5BanBnXkFtZTgwODEyNzcwOTE@._V1_Ratio0.7727_AL_.jpg",
            "name": "Russell Richardson",
            "asCharacter": "Viper 2"
          },
          {
            "id": "nm2258164",
            "image": "https://m.media-amazon.com/images/M/MV5BMTYyMDQ3NjI3MV5BMl5BanBnXkFtZTgwOTA5MTA5NjE@._V1_Ratio0.7727_AL_.jpg",
            "name": "Nazanin Boniadi",
            "asCharacter": "Amira Ahmed"
          },
          {
            "id": "nm2987980",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Thomas Craig Plumer",
            "asCharacter": "Colonel Craig"
          },
          {
            "id": "nm2987240",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Robert Berkman",
            "asCharacter": "Dealer at Craps Table"
          },
          {
            "id": "nm1680105",
            "image": "https://m.media-amazon.com/images/M/MV5BMjAyMzc5NTk2NV5BMl5BanBnXkFtZTYwMjkxOTcy._V1_Ratio0.7273_AL_.jpg",
            "name": "Stacy Stas Hurst",
            "asCharacter": "Woman at Craps Table (as Stacy Stas)"
          },
          {
            "id": "nm2246617",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Lauren Scyphers",
            "asCharacter": "Woman at Craps Table"
          },
          {
            "id": "nm1386651",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Frank Nyi",
            "asCharacter": "Engineer (as Dr. Frank Nyi)"
          },
          {
            "id": "nm0430096",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Marvin Jordan",
            "asCharacter": "Air Force Officer"
          },
          {
            "id": "nm1977586",
            "image": "https://m.media-amazon.com/images/M/MV5BNGNmYjBlYzQtMWRkYy00NzlhLWI3YjYtNTFhN2U1YmZlOWIyXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_Ratio0.7727_AL_.jpg",
            "name": "Jim Cramer",
            "asCharacter": "Jim Cramer"
          },
          {
            "id": "nm0262719",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Donna Evans",
            "asCharacter": "Woman In SUV (as Donna Evans Merlo)"
          },
          {
            "id": "nm1735719",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Reid Harper",
            "asCharacter": "Kid in SUV"
          },
          {
            "id": "nm2988527",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Summer Kylie Remington",
            "asCharacter": "Kid in SUV"
          },
          {
            "id": "nm1771540",
            "image": "https://m.media-amazon.com/images/M/MV5BMTM2ODYyNjk5NF5BMl5BanBnXkFtZTcwNzM2MzgyMQ@@._V1_Ratio0.7273_AL_.jpg",
            "name": "Ava Rose Williams",
            "asCharacter": "Kid in SUV"
          },
          {
            "id": "nm2655812",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Vladimir Kubr",
            "asCharacter": "Kid in SUV"
          },
          {
            "id": "nm1023022",
            "image": "https://m.media-amazon.com/images/M/MV5BYTExYmVjOTItZDgzOS00ZjRiLTllNzgtM2I3ZWIzMTdiZjhlXkEyXkFqcGdeQXVyNTc3NjIxMTg@._V1_Ratio1.5000_AL_.jpg",
            "name": "Callie Croughwell",
            "asCharacter": "Kid in SUV (as Callie Marie Croughwell)"
          },
          {
            "id": "nm2930275",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Javan Tahir",
            "asCharacter": "Gulmira Kid"
          },
          {
            "id": "nm1892588",
            "image": "https://m.media-amazon.com/images/M/MV5BYzg3Y2E5YzktNDg2Zi00NGI4LWFmYzAtMWNhNDQ4NGNmYjE3XkEyXkFqcGdeQXVyNTU5NDE0OQ@@._V1_Ratio0.8182_AL_.jpg",
            "name": "Sahar Bibiyan",
            "asCharacter": "Gulmira Mom"
          },
          {
            "id": "nm0640148",
            "image": "https://m.media-amazon.com/images/M/MV5BODYwNzMxNDA3OV5BMl5BanBnXkFtZTgwMjM3MjY2MjE@._V1_Ratio1.3182_AL_.jpg",
            "name": "Patrick O'Connell",
            "asCharacter": "Reporter"
          },
          {
            "id": "nm1286077",
            "image": "https://m.media-amazon.com/images/M/MV5BZDJiOWUxYTctYzk3MS00NTQ5LWFkYmMtYzAxYzYzNjM5MjVkXkEyXkFqcGdeQXVyMTM3Mzc4Mzk@._V1_Ratio0.7273_AL_.jpg",
            "name": "Adam Harrington",
            "asCharacter": "Reporter"
          },
          {
            "id": "nm0621244",
            "image": "https://m.media-amazon.com/images/M/MV5BOTAzNDA2NWUtZDk5Yi00OGY2LTg1ZTAtMDcyNjIzYTAxMjU2XkEyXkFqcGdeQXVyMDgwNDAwNg@@._V1_Ratio0.7273_AL_.jpg",
            "name": "Meera Simhan",
            "asCharacter": "Reporter"
          },
          {
            "id": "nm1797112",
            "image": "https://m.media-amazon.com/images/M/MV5BMTQ1NjczNjYwM15BMl5BanBnXkFtZTcwMDcwODQzMQ@@._V1_Ratio0.7273_AL_.jpg",
            "name": "Ben Newmark",
            "asCharacter": "Reporter"
          },
          {
            "id": "nm2164693",
            "image": "https://m.media-amazon.com/images/M/MV5BMTQ5MDYwMjgzN15BMl5BanBnXkFtZTgwNjI4ODI1MjE@._V1_Ratio0.7273_AL_.jpg",
            "name": "Ricki Lander",
            "asCharacter": "Flight Attendant (as Ricki Noel Lander)"
          },
          {
            "id": "nm1822910",
            "image": "https://m.media-amazon.com/images/M/MV5BZjE4YWZhNzYtZjMwNS00ZTQ2LWI5ZWEtNTE2N2U5ODhlZmZlXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio0.7273_AL_.jpg",
            "name": "Jeannine Kaspar",
            "asCharacter": "Flight Attendant"
          },
          {
            "id": "nm1477097",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Sarah Cahill",
            "asCharacter": "Flight Attendant"
          },
          {
            "id": "nm0498278",
            "image": "https://m.media-amazon.com/images/M/MV5BMTk3NDE3Njc5M15BMl5BanBnXkFtZTYwOTY5Nzc1._V1_Ratio0.7273_AL_.jpg",
            "name": "Stan Lee",
            "asCharacter": "Hugh Hefner"
          },
          {
            "id": "nm2988617",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Justin Rex",
            "asCharacter": "Air Force Lieutenant"
          },
          {
            "id": "nm1932193",
            "image": "https://m.media-amazon.com/images/M/MV5BMzAzNDFmOTUtZjQ2OS00NDJkLWFmMjktOGE1ZTc3Yzg1ZTIyXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio0.7727_AL_.jpg",
            "name": "Zorianna Kit",
            "asCharacter": "Zorianna Kit"
          },
          {
            "id": "nm0455698",
            "image": "https://m.media-amazon.com/images/M/MV5BNDMyNzZiMzktYzdmNC00ZDY4LWEzYzUtYTQyYjc2M2QyM2U0XkEyXkFqcGdeQXVyODM4MTIxMg@@._V1_Ratio0.7727_AL_.jpg",
            "name": "Lana Kinnear",
            "asCharacter": "Stan's Girl"
          },
          {
            "id": "nm2738616",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Nicole Lindeblad",
            "asCharacter": "Stan's Girl"
          },
          {
            "id": "nm2502264",
            "image": "https://m.media-amazon.com/images/M/MV5BNTVjZTYwODAtYzVhMy00M2U4LWIwOTctNmIwZjJjMzU2MDI2XkEyXkFqcGdeQXVyMTExODEwODgx._V1_Ratio0.7273_AL_.jpg",
            "name": "Masha Lund",
            "asCharacter": "Stan's Girl"
          },
          {
            "id": "nm0876266",
            "image": "https://m.media-amazon.com/images/M/MV5BMTUyODc1Njc0OV5BMl5BanBnXkFtZTgwMDcxMzIzNTE@._V1_Ratio1.0000_AL_.jpg",
            "name": "Gabrielle Tuite",
            "asCharacter": "Stan's Girl"
          },
          {
            "id": "nm0341377",
            "image": "https://m.media-amazon.com/images/M/MV5BOTliMTc1YTItYmVkMi00YTkxLTg5MWEtZWQwNzdiZWVhZmFlXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio0.7273_AL_.jpg",
            "name": "Tim Griffin",
            "asCharacter": "CAOC Analyst"
          },
          {
            "id": "nm0367176",
            "image": "https://m.media-amazon.com/images/M/MV5BYjVlMDk3MTMtMDc0Ni00ZmQxLTg1MWQtYTUzYWNhMWU2NjdjXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.5000_AL_.jpg",
            "name": "Joshua Harto",
            "asCharacter": "CAOC Analyst"
          },
          {
            "id": "nm1275916",
            "image": "https://m.media-amazon.com/images/M/MV5BMTQ5NDI2MzMyOV5BMl5BanBnXkFtZTcwMDEwMjQ4OQ@@._V1_Ratio0.7273_AL_.jpg",
            "name": "Micah Hauptman",
            "asCharacter": "CAOC Analyst"
          },
          {
            "id": "nm1084018",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "James Bethea",
            "asCharacter": "CAOC Analyst"
          },
          {
            "id": "nm1503555",
            "image": "https://m.media-amazon.com/images/M/MV5BMTczNjgwNTU3M15BMl5BanBnXkFtZTcwMjg4OTgyMg@@._V1_Ratio0.7273_AL_.jpg",
            "name": "Greg Anthony",
            "asCharacter": "Terrorist (uncredited)"
          },
          {
            "id": "nm1644068",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Jeffrey Ashkin",
            "asCharacter": "Photographer (uncredited)"
          },
          {
            "id": "nm3010385",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Mark W. Berry",
            "asCharacter": "News Reporter (uncredited)"
          },
          {
            "id": "nm0090309",
            "image": "https://m.media-amazon.com/images/M/MV5BMTkwZmU3NmUtMmYzMS00NWI2LWI1MmQtZTVkNDA3MGZjZmNjXkEyXkFqcGdeQXVyOTkwMjg4NTA@._V1_Ratio0.7273_AL_.jpg",
            "name": "Russell Bobbitt",
            "asCharacter": "Georgio (uncredited)"
          },
          {
            "id": "nm1477870",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Alberto Bosi",
            "asCharacter": "Insurgent (uncredited)"
          },
          {
            "id": "nm0106004",
            "image": "https://m.media-amazon.com/images/M/MV5BMjM5NDIxNTM0N15BMl5BanBnXkFtZTgwMzM0Mzk1MTE@._V1_Ratio0.7273_AL_.jpg",
            "name": "Jon Braver",
            "asCharacter": "Afghani Fighter (uncredited)"
          },
          {
            "id": "nm3095343",
            "image": "https://m.media-amazon.com/images/M/MV5BZDNmODhiMzgtZTgxYS00MTQ4LWE5YTktOTkwYjUwZTJmODgxL2ltYWdlXkEyXkFqcGdeQXVyMjQ5NTU4Mjk@._V1_Ratio0.7273_AL_.jpg",
            "name": "Vianessa Castaños",
            "asCharacter": "Fireman's Wife (uncredited)"
          },
          {
            "id": "nm2490987",
            "image": "https://m.media-amazon.com/images/M/MV5BMTYyMDgzNjUyOV5BMl5BanBnXkFtZTcwMTAyMDcwNw@@._V1_Ratio0.7273_AL_.jpg",
            "name": "Mike Cochrane",
            "asCharacter": "Gulmira Villager (uncredited)"
          },
          {
            "id": "nm2407968",
            "image": "https://m.media-amazon.com/images/M/MV5BYjJiOGM1OWItZjU0Mi00NTliLWE2YjEtNjU4MTU4OWZiMDNhXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.5000_AL_.jpg",
            "name": "Crystal Marie Denha",
            "asCharacter": "Dubai Beauty (uncredited)"
          },
          {
            "id": "nm6260186",
            "image": "https://m.media-amazon.com/images/M/MV5BYzExMzI4ZWYtNTlmYi00MzIyLThmNTAtNWI1YWFhODJlMmEyXkEyXkFqcGdeQXVyNjQ5OTc1Nzk@._V1_Ratio0.7727_AL_.jpg",
            "name": "Yonel Dorelis",
            "asCharacter": "Self - USAF Helicopter Pilot (uncredited)"
          },
          {
            "id": "nm2081556",
            "image": "https://m.media-amazon.com/images/M/MV5BMTc3NTQ3NDQxMl5BMl5BanBnXkFtZTcwODE4NDMzMQ@@._V1_Ratio0.7727_AL_.jpg",
            "name": "Mellany Gandara",
            "asCharacter": "Dubai Girl (uncredited)"
          },
          {
            "id": "nm0326217",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Glenn Goldstein",
            "asCharacter": "Afghani Insurgent (uncredited)"
          },
          {
            "id": "nm2955994",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Halla",
            "asCharacter": "House wife at Award Ceremony (uncredited)"
          },
          {
            "id": "nm3923280",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Kristin J. Hooper",
            "asCharacter": "Reporter (uncredited)"
          },
          {
            "id": "nm0000168",
            "image": "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_Ratio0.7273_AL_.jpg",
            "name": "Samuel L. Jackson",
            "asCharacter": "Nick Fury (uncredited)"
          },
          {
            "id": "nm1599104",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Chris Jalandoni",
            "asCharacter": "Dubai Waiter (uncredited)"
          },
          {
            "id": "nm2999525",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Stephen Janousek",
            "asCharacter": "Party Guest (uncredited)"
          },
          {
            "id": "nm0477465",
            "image": "https://m.media-amazon.com/images/M/MV5BYzdlNzY0NzgtZTQzMy00Nzc3LTlhYTUtYTljMDg5ZGJlOGZmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.7727_AL_.jpg",
            "name": "Theo Kypri",
            "asCharacter": "Insurgent (uncredited)"
          },
          {
            "id": "nm2266584",
            "image": "https://m.media-amazon.com/images/M/MV5BNmFjZTY3YzAtNDhjZC00NDc5LWFjMjMtMWUzZThkNDMyMWEwXkEyXkFqcGdeQXVyOTU2NzkwMw@@._V1_Ratio0.7273_AL_.jpg",
            "name": "Laura Liguori",
            "asCharacter": "Dancer in Ballroom (uncredited)"
          },
          {
            "id": "nm1098431",
            "image": "https://m.media-amazon.com/images/M/MV5BOGM4YWNjMTktMDYzMy00NWRiLWE0YjctYzRmNjRhNTBkYWMyXkEyXkFqcGdeQXVyMjMxMjk5Nzg@._V1_Ratio1.5000_AL_.jpg",
            "name": "Flavia Manes Rossi",
            "asCharacter": "Reporter (uncredited)"
          },
          {
            "id": "nm1215266",
            "image": "https://m.media-amazon.com/images/M/MV5BMTM1NTcwMTE4M15BMl5BanBnXkFtZTcwNDIxMzUxNw@@._V1_Ratio0.7727_AL_.jpg",
            "name": "Anthony Martins",
            "asCharacter": "Village Dad (uncredited)"
          },
          {
            "id": "nm1526617",
            "image": "https://m.media-amazon.com/images/M/MV5BY2YzNTRhMzAtY2NhMi00N2U1LTg0YmItMDgzYmUzYzEyODgxXkEyXkFqcGdeQXVyMjQ3MzQyNDY@._V1_Ratio0.7273_AL_.jpg",
            "name": "Allison McAtee",
            "asCharacter": "Dubai Beauty (uncredited)"
          },
          {
            "id": "nm2258412",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Robert McMurrer",
            "asCharacter": "Reporter (uncredited)"
          },
          {
            "id": "nm2653588",
            "image": "https://m.media-amazon.com/images/M/MV5BM2U0OTNhYzMtMzdjZi00ZDRhLTk0OTctMDZmMzQ1MDliMDgwXkEyXkFqcGdeQXVyMTI5MjUxMDg@._V1_Ratio1.2273_AL_.jpg",
            "name": "James M. Myers",
            "asCharacter": "Airforce Officer (uncredited)"
          },
          {
            "id": "nm1760388",
            "image": "https://m.media-amazon.com/images/M/MV5BMjEyMjYyODgyMV5BMl5BanBnXkFtZTcwMjg5NTYzOQ@@._V1_Ratio0.7273_AL_.jpg",
            "name": "America Olivo",
            "asCharacter": "Dubai Beauty #1 (uncredited)"
          },
          {
            "id": "nm3066181",
            "image": "https://m.media-amazon.com/images/M/MV5BZTk0ZDExNDYtOWMyNy00NjI2LWE1OWUtMTI3NTA4YjY5Y2EwXkEyXkFqcGdeQXVyMTk1ODczOTk@._V1_Ratio0.7727_AL_.jpg",
            "name": "Sylvette Ortiz",
            "asCharacter": "Staff Sergeant (uncredited)"
          },
          {
            "id": "nm2703513",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Brett Padelford",
            "asCharacter": "Journalist (uncredited)"
          },
          {
            "id": "nm3567687",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Ajani Perkins",
            "asCharacter": "Voice (uncredited)"
          },
          {
            "id": "nm6392685",
            "image": "https://m.media-amazon.com/images/M/MV5BZjczMjM1OGMtNTUzMC00NTdiLWEyODMtNDZlMDg5NDFhZGViXkEyXkFqcGdeQXVyNDY3Mzg3ODE@._V1_Ratio0.7273_AL_.jpg",
            "name": "Elijah Samuel Quesada",
            "asCharacter": "Waiter / Reporter (uncredited)"
          },
          {
            "id": "nm1308942",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Chris Reid",
            "asCharacter": "Reporter (uncredited)"
          },
          {
            "id": "nm3649434",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Toi Rose",
            "asCharacter": "News Cameraman (uncredited)"
          },
          {
            "id": "nm1914981",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "name": "Arne Starr",
            "asCharacter": "Dubai Tychoon in hat / Bus Passenger (uncredited)"
          },
          {
            "id": "nm1222064",
            "image": "https://m.media-amazon.com/images/M/MV5BMTkwMzcxOTYwMF5BMl5BanBnXkFyZXN1bWU@._V1_Ratio0.7727_AL_.jpg",
            "name": "George F. Watson",
            "asCharacter": "Rooftop Fireman (uncredited)"
          },
          {
            "id": "nm0469487",
            "image": "https://m.media-amazon.com/images/M/MV5BNTUwMzMzMjYyMl5BMl5BanBnXkFtZTcwNTg4MzUzMQ@@._V1_Ratio0.9545_AL_.jpg",
            "name": "David Zyler",
            "asCharacter": "Whiplash One (voice) (uncredited)"
          }
        ],
        "fullCast": {},
        "genres": "Action, Adventure, Sci-Fi",
        "genreList": [],
        "companies": "Paramount Pictures, Marvel Enterprises, Marvel Studios",
        "companyList": [
          {},
          {},
          {
            "id": "co0051941",
            "name": "Marvel Studios"
          }
        ],
        "countries": "USA, Canada",
        "countryList": [
          {},
          {
            "key": "Canada",
            "value": "Canada"
          }
        ],
        "languages": "English, Persian, Urdu, Arabic, Kurdish, Hindi, Hungarian",
        "languageList": [],
        "contentRating": "PG-13",
        "imDbRating": "7.9",
        "imDbRatingVotes": "1062552",
        "metacriticRating": "79",
        "ratings": {
          "imDbId": "tt0371746",
          "title": "Iron Man",
          "fullTitle": "Iron Man (2008)",
          "type": "Movie",
          "year": "2008",
          "imDb": "7.9",
          "metacritic": "79",
          "theMovieDb": "7.6",
          "rottenTomatoes": "94",
          "filmAffinity": "6.6",
          "errorMessage": ""
        },
        "wikipedia": null,
        "posters": {
          "imDbId": "tt0371746",
          "title": "Iron Man",
          "fullTitle": "Iron Man (2008)",
          "type": "Movie",
          "year": "2008",
          "posters": [],
          "backdrops": [],
          "errorMessage": ""
        },
        "images": {
        "imDbId": "tt0371746",
        "title": "Iron Man",
        "fullTitle": "Iron Man (2008)",
        "type": "Movie",
        "year": "2008",
        "items": [
            {
                "title": "Robert Downey Jr. and Leslie Bibb in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMjE0NzA3NzEzNV5BMl5BanBnXkFtZTcwNzAzNTIzMw@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTI5ODY5NTUzMF5BMl5BanBnXkFtZTcwOTAzNTIzMw@@._V1_Ratio1.4200_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTI3NjA0MTEzMF5BMl5BanBnXkFtZTcwMDEzNTIzMw@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BNjg4NjM1NDI0NF5BMl5BanBnXkFtZTcwMTEzNTIzMw@@._V1_Ratio1.0000_AL_.jpg"
            },
            {
                "title": "Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTUzODkyNDE2OV5BMl5BanBnXkFtZTcwMzEzNTIzMw@@._V1_Ratio1.7800_AL_.jpg"
            },
            {
                "title": "Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTMwOTIwMTk2Nl5BMl5BanBnXkFtZTcwNDEzNTIzMw@@._V1_Ratio1.7800_AL_.jpg"
            },
            {
                "title": "Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTczNzM5OTAyMF5BMl5BanBnXkFtZTcwNTEzNTIzMw@@._V1_Ratio1.7800_AL_.jpg"
            },
            {
                "title": "Gwyneth Paltrow in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTM0NjIwNzAyN15BMl5BanBnXkFtZTcwNjEzNTIzMw@@._V1_Ratio1.7800_AL_.jpg"
            },
            {
                "title": "Gwyneth Paltrow in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTI5MDc1OTg5NF5BMl5BanBnXkFtZTcwNzEzNTIzMw@@._V1_Ratio1.7800_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTQ5MjUyMzk5NV5BMl5BanBnXkFtZTcwMzUyNTIzMw@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. and Terrence Howard in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMjIyNTY0MzU0MV5BMl5BanBnXkFtZTcwNDUyNTIzMw@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Gwyneth Paltrow in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTM0MDczMjkwNV5BMl5BanBnXkFtZTcwNTUyNTIzMw@@._V1_Ratio1.0000_AL_.jpg"
            },
            {
                "title": "Jeff Bridges and Gwyneth Paltrow in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTI5NjY0NzE0MV5BMl5BanBnXkFtZTcwNjUyNTIzMw@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Jeff Bridges in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BODQwNzIyNzc5OV5BMl5BanBnXkFtZTcwNzUyNTIzMw@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Jon Favreau in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMjA5NjcwNzk1OF5BMl5BanBnXkFtZTcwOTUyNTIzMw@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Faran Tahir in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTc2NDczNTI2NF5BMl5BanBnXkFtZTcwNDgxNTIzMw@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. and Shaun Toub in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMjY4MDk0OTQ2MF5BMl5BanBnXkFtZTcwNTgxNTIzMw@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Faran Tahir in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTkzNjQzOTQyN15BMl5BanBnXkFtZTcwNjgxNTIzMw@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. and Jon Favreau in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTYyNDkzMDA5MF5BMl5BanBnXkFtZTcwNzgxNTIzMw@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Terrence Howard in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTQzNDE4MDU2Ml5BMl5BanBnXkFtZTcwODgxNTIzMw@@._V1_Ratio1.0000_AL_.jpg"
            },
            {
                "title": "Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTQ0NzA2Nzg0MV5BMl5BanBnXkFtZTcwMDkxNTIzMw@@._V1_Ratio1.0000_AL_.jpg"
            },
            {
                "title": "Jeff Bridges in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTk1Mjk4NTIwOF5BMl5BanBnXkFtZTcwMTkxNTIzMw@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. and Gwyneth Paltrow in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BNjA1ODA2MDI4NF5BMl5BanBnXkFtZTcwMjkxNTIzMw@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. and Jon Favreau in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTc3MjAwNzk0NF5BMl5BanBnXkFtZTcwMzkxNTIzMw@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMjA4MjUyMjI4Ml5BMl5BanBnXkFtZTcwNDkxNTIzMw@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTI3NjE0MzgzOV5BMl5BanBnXkFtZTcwNjkxNTIzMw@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Jeff Bridges and Robert Downey Jr. in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTYxOTk1MTE4N15BMl5BanBnXkFtZTcwODkxNTIzMw@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTk3NzIwNTA3MF5BMl5BanBnXkFtZTcwMjUyNTIzMw@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr., Terrence Howard, and Jon Favreau in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTk0ODQ4NzI4N15BMl5BanBnXkFtZTcwODAzNTIzMw@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTU4Nzk0NzQ2MF5BMl5BanBnXkFtZTcwODM3Mjk1MQ@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BOTc1NTgyODgxOV5BMl5BanBnXkFtZTcwMDQ3Mjk1MQ@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr., Terrence Howard, and Jon Favreau in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BNTgwMDI5NTU4N15BMl5BanBnXkFtZTcwMzQ3Mjk1MQ@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Gwyneth Paltrow and Terrence Howard in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTY4ODg1NjM4Nl5BMl5BanBnXkFtZTcwNDQ3Mjk1MQ@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Jeff Bridges in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTQzMTY5MjY2MV5BMl5BanBnXkFtZTcwNjQ3Mjk1MQ@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Leslie Bibb in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTQ4MDk3OTY3NF5BMl5BanBnXkFtZTcwNzQ3Mjk1MQ@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BNjIxMjA0NTQ1NV5BMl5BanBnXkFtZTcwODQ3Mjk1MQ@@._V1_Ratio1.7800_AL_.jpg"
            },
            {
                "title": "Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTk0NTc0NDczMV5BMl5BanBnXkFtZTcwMDU3Mjk1MQ@@._V1_Ratio1.7800_AL_.jpg"
            },
            {
                "title": "Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTY4NjE5MDQ2M15BMl5BanBnXkFtZTcwMTU3Mjk1MQ@@._V1_Ratio1.7800_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTgxNzQyNjY1OF5BMl5BanBnXkFtZTcwMjU3Mjk1MQ@@._V1_Ratio1.0000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTgwNjE5OTc1M15BMl5BanBnXkFtZTcwMzU3Mjk1MQ@@._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTIxMjE3OTg0NV5BMl5BanBnXkFtZTYwODM2Nzc4._V1_Ratio1.0000_AL_.jpg"
            },
            {
                "title": "Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTI3MDQyNTA0NV5BMl5BanBnXkFtZTYwMDQ2Nzc4._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTYxMDE4OTA4M15BMl5BanBnXkFtZTYwMTQ2Nzc4._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTgwMTI5MTE5N15BMl5BanBnXkFtZTYwNzgyNzA3._V1_Ratio1.0000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTM0NzEwNzQzOV5BMl5BanBnXkFtZTYwMjQ2Nzc4._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTU3Mzc0MzI5MV5BMl5BanBnXkFtZTYwMzQ2Nzc4._V1_Ratio1.5000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMjU2MDYyMzE2MV5BMl5BanBnXkFtZTYwMDkyNzA3._V1_Ratio1.0000_AL_.jpg"
            },
            {
                "title": "Robert Downey Jr. and Jon Favreau in Iron Man (2008)",
                "image": "https://m.media-amazon.com/images/M/MV5BMTY4MDUxNjExMl5BMl5BanBnXkFtZTgwOTE2NTc3NDM@._V1_Ratio1.6400_AL_.jpg"
            }
        ],
        "errorMessage": ""
    },
        "trailer": {},
        "boxOffice": {},
        "tagline": null,
        "keywords": "billionaire,inventor,robot suit,marvel cinematic universe,based on comic",
        "keywordList": [],
        "similars": [
        {
            "id": "tt1228705",
            "title": "Iron Man 2",
            "image": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_Ratio0.6763_AL_.jpg",
            "imDbRating": "6.9"
        },
        {
            "id": "tt1300854",
            "title": "Iron Man 3",
            "image": "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_Ratio0.7053_AL_.jpg",
            "imDbRating": "7.1"
        },
        {
            "id": "tt0848228",
            "title": "The Avengers",
            "image": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6763_AL_.jpg",
            "imDbRating": "8.0"
        },
        {
            "id": "tt0458339",
            "title": "Captain America: The First Avenger",
            "image": "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_Ratio0.6763_AL_.jpg",
            "imDbRating": "6.9"
        },
        {
            "id": "tt0800369",
            "title": "Thor",
            "image": "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_Ratio0.6763_AL_.jpg",
            "imDbRating": "7.0"
        },
        {
            "id": "tt1843866",
            "title": "Captain America: The Winter Soldier",
            "image": "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_Ratio0.6860_AL_.jpg",
            "imDbRating": "7.8"
        },
        {
            "id": "tt2395427",
            "title": "Avengers: Age of Ultron",
            "image": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_Ratio0.6763_AL_.jpg",
            "imDbRating": "7.3"
        },
        {
            "id": "tt3498820",
            "title": "Captain America: Civil War",
            "image": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_Ratio0.6763_AL_.jpg",
            "imDbRating": "7.8"
        },
        {
            "id": "tt1211837",
            "title": "Doctor Strange",
            "image": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_Ratio0.6763_AL_.jpg",
            "imDbRating": "7.5"
        },
        {
            "id": "tt2250912",
            "title": "Spider-Man: Homecoming",
            "image": "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_Ratio0.6763_AL_.jpg",
            "imDbRating": "7.4"
        },
        {
            "id": "tt3896198",
            "title": "Guardians of the Galaxy Vol. 2",
            "image": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_Ratio0.6763_AL_.jpg",
            "imDbRating": "7.6"
        },
        {
            "id": "tt0478970",
            "title": "Ant-Man",
            "image": "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_Ratio0.6763_AL_.jpg",
            "imDbRating": "7.3"
        }
    ],
        "tvSeriesInfo": null,
        "tvEpisodeInfo": null,
        "errorMessage": ""
      },
      movieFAQ:
      {
"imDbId": "tt0371746",
"title": "Iron Man",
"fullTitle": "Iron Man (2008)",
"type": "Movie",
"year": "2008",
"items": [
{
"question": "Which characters were adapted from Marvel's Iron Man comic books?",
"answer": "For this list only the creators of the characters first appearances are listed. As with all comic book characters, Iron Man and his supporting cast have had several reinventions and different contributions from different writers. Theses include different iterations in different mediums that all have added different concepts to the overall mythology of the characters.Theirs Anthony Edward \"Tony\" Stark, referred to as Tony Stark. He made his first appearance in the comic story \"Iron Man Is Born!\" Tales of Suspense #39 (March 1963) by writers & Larry Lieber and artists Don Heck & Jack Kirby.Colonel James Rupert \"Rhodey\" Rhodes, referred to as Rhodey Rhodes on screen. He made his first appearance in the comic story \"At the Mercy of My Foes Friends!\" from Iron Man #118 (January 1979) by writer David Michelinie, writer/artist Bob Layton and artist John Byrne.Obadiah Stane, who made his first appearance in the comic story \"Knight's Errand\" from Iron Man #163 (October 1982) by writer Denny O'Neil and artist Luke McDonnell.Virginia \"Pepper\" Potts, referred to as Pepper Potts on screen. She made her first appearance in the comic story \"The Icy Fingers of Jack Frost!\" from Tales of Suspense #45 (September 1963) by writers Stan Lee & Robert Bernstein and artist Don Heck.Christine Everhart, who made her first appearance in the comic story \"The Best Defense - Part Three: Technology\" from Iron Man Volume 3 #75 by writer John Jackson Miller and artist Jorge Lucas.J.A.R.V.I.S. (Just A Rather Very Intelligent System) is based on the comic book character of Edwin Jarvis. Edwin Jarvis made his first appeared in the comic story \"Captain America\" from Tales of Suspense #59 (November 1964) by writer Stan Lee and artist Jack Kirby.Harold Joseph \"Happy\" Hogan, referred to as Happy Hogan on screen. He made his first appearance in the comic story \"The Icy Fingers of Jack Frost!\" from Tales of Suspense #45 (September 1963) by writers Stan Lee & Robert Bernstein and artist Don Heck.Howard Anthony Walter Stark, referred to as Howard Stark on screen. He made his first appearance in the comic story \"The Controller Lives!\" from Iron Man #28 (August 1970) by writer Archie Goodwin and artist Don Heck.and Nicholas Joseph \"Nick\" Fury, referred to as Nick Furry on screen. He made his first appearance in the comic story Sergeant Fury and his Howling Commandos #1 (May 1963) by writer Stan Lee and artist Jack Kirby.All other characters were created just for the film by the movie's writers. Edit"
},
{
"question": "Why was the fighter pilot's chute jammed during the \"training exercise\" scene?",
"answer": "First, it's a very common plot device in action movies: the parachute ejector seat that fails or the parachute that fails to deploy. Great way to create tension in an action sequence like this.In this case, it looks like a malfunction with the lever that the pilot has to yank on to release his chute: it's probably bent in such a way that he can't pull up on it."
},
{
"question": "What is 'Iron Man' about?",
"answer": "When wealthy industrialist Tony Stark () suffers a chestful of shrapnel after his Humvee is bombed by enemy fire in Afghanistan where he has gone to give a presentation of the new Jericho missile that Stark Industries has developed, his life is saved only by an electromagnet attached to a car battery that serves to keep the shrapnel from piercing his heart. Tony escapes from his captors by creating an arc reactor that eliminates the need for the battery and an iron suit that protects him from attack. Back in the U.S., he announces that his company will cease making weapons, and he begins work on an updated armored suit, all to the chagrin of his partner Obadiah Stane (Jeff Bridges). Edit"
},
{
"question": "Is \"Iron Man\" based on a book?",
"answer": "Iron Man is based on a comic book of the same name created by Marvel Comics editor Stan Lee and artists Don Heck and Jack Kirby. Iron Man first appeared in issue #39 of Tales of Suspense (March 1963). The screenplay for the film was written by Mark Fergus, Hawk Ostby, Art Marcum, and Matt Holloway. Iron Man was followed by (2010) and Iron Man Three (2013) (2013). Edit"
},
{
"question": "Who or what is the Invincible Iron Man?",
"answer": "Iron Man is the alias used by billionaire industrialist, inventor, military contractor, philanthropist, adventurer and socialite, Tony Stark. By day, Stark is the majority shareholder, CEO, chief technologist and de facto head of Stark International, a multinational conglomerate of technology companies. Stark International's primary businesses are research and development, weapons manufacturing, engineering, computer software and consumer electronics. Stark transforms himself into Iron Man when he dons his revolutionary suit of powered armor to fight crime and injustice. The Iron Man grants Stark superhuman strength, invulnerability, supersonic-flight capabilities and access to a vast array of directed energy weapons (including Stark's own proprietary repulsor-ray technology). The suit is controlled cybernetically by the wearer (as in the mechanisms of perception and control are similar to that of the natural relationship between the natural brain and the rest of the natural body). It also features a sophisticated operating system which employs some artificial intelligence."
},
{
"question": "Can Iron Man be considered a cyborg?",
"answer": "In common parlance, no; Iron Man is not a cyborg. He is not much more of a cyborg than a person who wears glasses or contact lenses. A cyborg or cybernetic being, as commonly depicted in science fiction, e.g., (1987), The Terminator (1984) (1984), The Six Million Dollar Man (1973) (1973), and Darth Vader from Star Wars (1977) (1977), is a (chiefly cybernetic and often inseparable) fusion of living tissue and synthetic components. This interactive synthesis of organic and artificial systems can produce, for an organic lifeform, a wide variety of effects including, but not limited to, enhanced strength, speed, reflexes, endurance, intelligence etc. Iron Man is a \"superhero persona\", a man who is wearing/operating a suit of powered armor (an \"exoskeleton\") that could be worn by different people. Stark does, however, have an embedded chest piece, intended as a lifesaving device and capable of interacting with and powering the armor. Edit"
},
{
"question": "What kind of jet is Tony Stark's private jet?",
"answer": "It is a Boeing 737-800. However, the tail section is CGI-altered to make it appear more futuristic. Stark, being a technology wiz and a billionaire, would jump at the chance to have a sleeker and more modern plane than anyone else."
},
{
"question": "Who are the villain(s) in 'Iron Man'?",
"answer": "Iron Man's primary nemesis is Obadiah Stane, aka the Iron Monger. In the beginning of the movie, Stark is captured by a group of terrorists known as \"The Ten Rings\". The Ten Rings is a reference to long time Iron Man nemesis, The Mandarin, who wields ten directed-energy-based rings as weapons."
},
{
"question": "Which armors are featured in the film?",
"answer": "The three armors featured are the Mark I, Mark II and Mark III. The Mark I armor is the gray incarnation of the Diving Bell Armor Stark was forced to produce while in captivity. It is bullet resistant and features flamethrowers as its primary weapon. It also has limited flight capability. The Mark II armor features a more streamlined design, flight capabilities and directed energy weapons. It has a monochrome silver-metallic finish. The Mark III is essentially a duplicate of Mark II revised with the trademark red and gold color scheme known to the majority of fans. The Mark III armor compensates for a design flaw in the Mark II design which allowed for \"icing\" to occur during high-altitude flights."
},
{
"question": "Does this movie mention Tony Stark's alcohol issues?",
"answer": "No, but we do see Tony Stark drinking often. Several characters also have recollections of Tony being inebriated during events that take place prior to the film's timeline."
},
{
"question": "Why does Tony ask for one of the vodka martinis to be \"dirty\"?",
"answer": "Presumably because he likes it that way. A standard vodka martini contains vodka, vermouth and an olive, and is crystal clear in color; a \"dirty\" martini is one that uses olive brine in place of or alongside the vermouth, and appears cloudier in color."
},
{
"question": "Is this in the same universe as the rest of the Marvel movies?",
"answer": "Only some of them. All cinematic material made under the Marvel Studios banner, e.g., Iron Man (2008), , Thor (2011) and Captain America: The First Avenger (2011), are all set in the same universe (known as the Marvel Cinematic Universe), with the characters crossing over (most notably S.H.I.E.L.D. personnel-Fury, Coulson, Romanoff or Barton), culminating in The Avengers (2012) which ties these films together. Marvel Studios also owns / owned The Punisher and Blade, however The Punisher (2004), Punisher: War Zone (2008), Blade (1998), Blade II (2002) and Blade: Trinity (2004) are / were not in the Marvel Cinematic Universe (MCU). Other Marvel-based films owned by other studios are not set in the MCU, due to differing ownership. This includes, for example: Spider-Man (2002) and Ghost Rider (2007) (both owned by Sony); X-Men (2000), Fantastic Four (2005), and Daredevil (2003) (all owned by Fox). Edit"
},
{
"question": "What does S.H.I.E.L.D. stand for?",
"answer": "In this film it stands for \"Strategic Homeland Intervention, Enforcement and Logistics Division\". Several characters joke about the length, which leads to the creation of the acronym, SHIELD. In the comics, it is \"Supreme Headquarters, International Espionage, Law-enforcement Division\" from 1965 until 1991 when it changed its name to \"Strategic Hazard Intervention, Espionage Logistics Directorate\". In the popular 1990s Spider-Man cartoon that aired on Fox Kids, it was identified as \"Strategical Hazard International Espionage Law-enforcement Division\"."
},
{
"question": "Why didn't Nick Fury appear in preview screenings?",
"answer": "In an Entertainment Weekly interview, says that Marvel Studios President Kevin Feige ordered the scene cut out of previews in order to keep fans guessing. Edit"
},
{
"question": "Why was Samuel L. Jackson cast in the role of Nick Fury? Isn't Fury Caucasian in the comic books?",
"answer": "The portrayal of Colonel Nicholas Joseph \"Nick\" Fury by Sam Jackson is based on the Ultimate Marvel Universe interpretation of the character. Ultimate Fury was intentionally patterned after the veteran actor after obtaining his consent to do so. This casting decision has proven controversial amongst continuity purists, despite the fact that it is not the first time such a deviation from original canon has occurred. Wilson Fisk (aka the Kingpin of Crime), a Caucasian character, was portrayed by , an American actor of Black descent, in the 2003 adaptation of Daredevil. The Ultimate Marvel Universe is a continuity that is separate and distinct from the classic Marvel Universe. The Ultimate imprint features revisionist versions of characters and stories which are featured in, and originally took place in, classic Marvel continuity. The Marvel Ultimate imprint prefixes all of its characters, scenarios and titles with the word \"Ultimate\" (e.g. Ultimate Spider-Man, Ultimate Iron Man, Ultimate Marvel Team-Up, Ultimate Adventures, etc). Most Ultimate characters only bear the name and basic origin of their classic counterparts. Other details such as powers, appearance, personality and modus operandi are vastly different. To distinguish the two different continuities, some fans refer to classic Marvel Universe continuity as the \"616 Universe\". Nick Fury (played by Jackson) appears in a post end-credits sting where he confronts Tony Stark in his residence and says he wants to talk about \"The Avengers Initiative.\" Also as a result of Jackson's involvement with the film series, it led to a new character named Nick Fury Jr. to be introduced into the Mainstream universe as a means to phase out the classic version from the franchise. More Information: Ultimate Iron Man, Ultimate Nick Fury, Ultimate Marvel, Earth-616, and Nick Fury Jr. Edit"
},
{
"question": "What are the main differences between the \"Iron Man\" film and comic book properties?",
"answer": "There are many differences between the film and comic book properties, the primary differences between the two are documented as follows. In the comics, Ho Yinsen—the man who helped Tony build the first Iron Man suit—was Chinese. The film's Yinsen () is Afghani, from the fictional town of Gulmira. However, Yinsen is a Chinese name and it would be unlikely for an Afghan to be so named. Obadiah Stane, in the comics, was a rival businessman, and had his own company, Stane International. However, like his film incarnation, he was friendly with Tony's father before his passing. The group that kidnaps Tony Stark is implied to be connected to the Mandarin, Iron Man's archenemy. The Mandarin had nothing to do with his kidnapping in the comics (well, not directly, anyway). The Ten Rings are also involved with Obadiah Stane, who personally ordered the hit on Tony Stark. This is not the case in the comic book series. Jim Rhodes was a full-bird Colonel in the United States Marine Corps when he first appeared in the comics, while in the film he is a Lt. Colonel in the Air Force. JARVIS, the A.I. featured in the film, is a flesh and blood butler in the comic books. Edit"
},
{
"question": "Why does Tony Stark act the way he does during the last press conference?",
"answer": "During the press conference at the end, Tony Stark hesitates to use SHIELD's cover story and then blurts out, \"I am Iron Man.\" As to why he does this, an excerpt from the novelization offers some insight:He thinks about how lying and deceit from others has brought him to this pass. He has sworn to put an end to that sort of thing, to do away with underhandedness and double-dealing. With the sort of mind-set that resulted in weapons being secretly sold to enemies and destroying lives.People don't really know what happened last night. More questions will be raised, and more. There has to be an end to fear, and an end to secrecy, or otherwise this wreck of a world is going to be the best they've got and it's only going to get worse.And the honesty, the transforming of the unknown into the known, the upfront dealings with people...it has to start somewhere.Up until the publication of Iron Man vol. 3 issue #55, where Tony Stark reveals his identity, the media spin was that Iron Man was Tony Stark's bodyguard. Given the character's tendency towards impulsive and risky behavior, his sudden revelation is not out of character."
},
{
"question": "How does the movie end?",
"answer": "Tony orders Pepper to overload the large arc reactor in the building even though he is still on the roof. Pepper is hesitant but obeys. The reactor releases its shockwave, knocking out the Iron Monger and killing Stane. The mini arc reactor in Tony's chest sparks back to life, allowing him to survive. The press subsequently lauds the \"Iron Man\" as a hero. Tony likes the moniker, even though his suit is made of a gold-titanium alloy. Agent Coulson () invents a cover story telling the \"truth\" about the destruction of the Stark Building: a robotic prototype malfunctioned and caused damage to the arc reactor, Stark was on his yacht in Avalon Island, Stane was killed in a small aircraft accrident while on vacation, and the Iron Man was Stark's bodyguard. In the final scene, Tony is about to report Coulson's cover story at a press conference but tosses away his prepared statement and says only, \"I am Iron Man.\" Edit"
},
{
"question": "Is there a scene after the credits?",
"answer": "Yes. Tony returns home to find a mysterious man in black awaiting him. He introduces himself as Nick Fury, director of SHIELD. He points out that Tony is not the only superhero in existence and wants to talk about him joining the \"Avenger Initiative.\""
},
{
"question": "Who are the Avengers?",
"answer": "The original Avengers consisted of Ant-Man, Wasp, Thor, Iron Man and the Incredible Hulk. Captain America joined the group in Volume 1 of The Avengers, Issue number 4, and replaced the Hulk."
},
{
"question": "Is it true Captain America's shield appears in the movie?",
"answer": "Yes. During the scene after Colonel Rhodes gives his \"training exercise\" cover story to the press, Tony Stark is in the middle of removing his damaged suit. What appears to be a partially built, shield-like apparatus with an American flag design and a star in the middle can be seen in Stark's work area just before Pepper Potts () discovers him. Producer Kevin Feige has stated that it is, indeed, Captain America's shield. Blink and you'll miss it! Edit"
},
{
"question": "Does Iron Man appear in 'The Incredible Hulk'?",
"answer": "Yes. Tony Stark puts in an appearance at the end of , which suggests that a team is being formed, most likely \"The Avengers.\" In fact, the post-credits scene (i.e., the stinger) makes reference to the \"Avengers Initiative.\" Edit"
},
{
"question": "Where is Stan Lee's cameo in this movie?",
"answer": "As Tony Stark arrives at his third annual benefit for the Firefighter's Family Fund, he pats Stan Lee who presents like Hugh Hefner, i.e. wearing a bathrobe and having a supermodel at each of his arms."
},
{
"question": "What are the names of all of the songs that have been featured in Iron Man trailers?",
"answer": "Hell Above Water by English alternative duo CurveHey Man Nice Shot by American rock band FilterIron Man by English heavy metal band Black SabbathBack in Black by Australian hard rock band AC/DCCochise by American hard rock band AudioslaveBirthright by American industrial rock band Celldweller"
},
{
"question": "Is \"Iron Man\" available on DVD and Blu-ray disc?",
"answer": "Iron Man is available worldwide on DVD (regions 1 and 2) and Blu-ray (regions A and B)."
}
],
"spoilerItems": [],
"errorMessage": ""
      },

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
},
  methods: {
    getMovie() {
      fetch('https://imdb-api.com/en/API/Title/k_81sqejxgg/tt0371746/FullActor,FullCast,Posters,Images,Trailer,Ratings')
        .then(response => response.text())
        .then(response => JSON.parse(response))
        .then(response => {
          this.imgUrl=this.movieData.image,
          this.title=this.movieData.title,
          this.direcotr=this.movieData.directors,
          this.year=this.movieData.year,
          this.rated=this.movieData.contentRating,
          this.runtime=this.movieData.runtimeStr,
          this.plot=this.movieData.plot,
          this.writers=this.movieData.writers,
          this.genres=this.movieData.genres,
          this.awards=this.movieData.awards,
          this.countries=this.movieData.countries,
          this.imDbRating=this.movieData.imDbRating,
          
          
          this.listeBazigaran = this.movieData.actorList.slice(0,5),
          this.listeImgs=this.movieData.images.items.slice(0,10)
          this.movieList=this.movieData.similars.slice(0,11)
        });
    },
    getFAQ(){
      fetch('https://imdb-api.com/en/API/FAQ/k_088t508ii/tt0371746')
        .then(responseFAQ=>responseFAQ.text())
        .then(responseFAQ=> JSON.parse(responseFAQ))
        .then(responseFAQ=>{
          this.soalat=this.movieFAQ.items
        });
    },
  },
  created() {
    this.getMovie()
    this.getFAQ()
  },
}
</script>


