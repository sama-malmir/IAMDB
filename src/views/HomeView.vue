<template>
  <div class="bg-back-ground text-main-color">
    <CoverSite />
    <CastAndCrew :listeKameleBazigaran="listeBazigaran" />
    <Photos :listKameleImgs="listeImgs" />
  </div>
</template>

<script >
import CoverSite from '../components/CoverSite.vue';
import CastAndCrew from '../components/CastAndCrew.vue';
import Photos from '../components/Photos.vue';
export default {
  data() {
    return {
      listeBazigaran: {},
      listeImgs:{},
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
        "similars": [],
        "tvSeriesInfo": null,
        "tvEpisodeInfo": null,
        "errorMessage": ""
      }

    };
    },
  components: {
    CoverSite,
    CastAndCrew,
    Photos,
},
  methods: {
    getMovie() {
      fetch('https://imdb-api.com/en/API/Title/k_81sqejxg/tt0371746/FullActor,FullCast,Posters,Images,Trailer,Ratings')
        .then(response => response.text())
        .then(response => JSON.parse(response))
        .then(response => {
          this.listeBazigaran = this.movieData.actorList.slice(0,5),
          this.listeImgs=this.movieData.images.items.slice(0,10)
        });
    },
  },
  created() {
    this.getMovie()
  },
}
</script>


