<template>
    <div class="container">
        <div class="bg-back-ground h-h-727 w-screen">
            <div class="bg-no-repeat bg-search lg:bg-search-d lg:bg-contain lg:h-h-727 h-h-409 lg:-mt-6 "></div>
            <h1
                class="mx-[15px] lg:mx-[120px] text-main-color text-ff48 font-bold lg:text-8xl lg:text-right lg:-mt-[464px] -mt-[220px]">
                IAMDB
            </h1>

            <!-- ---------serchbox-mobile--------- -->
            <div class="mx-[15px] lg:mx-[120px] items-center lg:flex  lg:mt-28 mt-w-276">
                <div class="relative">
                    <div
                        class="lg:hidden lg:flex-none border border-main-color w-w-330 h-11  rounded-full my-3 overflow-hidden">
                        <input v-model="UserSearch" placeholder="Your favorite movie ..."
                            class=" absolute w-full h-full text-main-color opacity-30 bg-back-ground font-normal text-f16  px-8 py-3 rounded-full "
                            type="text">
                    </div>
                    <div v-if="movies" 
                        class="lg:hidden list-none flex-col  w-w-295 h-h-275 divide-y divide-gray-500 bg-zinc-800 cursor-pointer absolute bottom-11 left-4 overflow-y-scroll">
                        <div v-for="movie in movies">
                            <router-link :to="movie.id" class="inline-flex p-3 ">
                                <img :src="movie.image" alt="movie poster" class="object-cover object-center w-14 h-20">
                                <div class="flex flex-col justify-center pl-5">
                                    <span class="text-main-color font-normal text-f16 pb-2">{{ movie.title }}</span>
                                    <span class="text-main-color font-normal text-f14">{{ movie.description }}</span>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="lg:hidden">
                    <button @click="searchMovie().isOpen = !isOpen"
                        class="lg:flex-none  inline-flex border-0 bg-secondary-color w-w-330 h-11 lg:w-40 lg:h-h-61 rounded-full justify-center items-center gap-3 overflow-hidden">
                        <span class="text-main-color font-normal text-f16 lg:text-f21">Search</span>
                        <img class="lg:w-w-21 lg:h-h-21 h-h-18 w-w-18" src="../assets/icon/search-icon.svg"
                            alt="search">
                    </button>
                </div>

                <!-- ---------serchbox-desktop--------- -->
                <div class="relative">
                    <div 
                        class="hidden lg:block  lg:flex-none border border-main-color  lg:w-w-1026 mr-3 lg:h-h-61 rounded-full my-3 overflow-hidden">
                        <input v-model="UserSearch" placeholder="Type the name of your favorite movie ..."
                            class=" w-full h-full text-main-color opacity-30 bg-back-ground font-normal text-f21 px-8 py-3"
                            type="text">
                    </div>
                    <div v-if="movies"
                        class="hidden lg:block list-none flex-col  lg:w-[837px] lg:h-h-415 divide-y divide-gray-500 bg-zinc-800 cursor-pointer absolute bottom-20 left-6 overflow-y-scroll ">
                        <div v-for="movie in movies">
                            <router-link :to="movie.id" class="inline-flex p-3 ">
                                <img :src="movie.image" alt="movie poster" class="object-cover object-center w-14 h-20">
                                <div class="flex flex-col justify-center pl-5">
                                    <span class="text-main-color font-normal text-f25 pb-3">{{ movie.title }}</span>
                                    <span class="text-main-color font-normal text-f18">{{ movie.description }}</span>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="hidden lg:block">
                    <button @click="searchMovie().isOpen = !isOpen"
                        class=" lg:flex-none  inline-flex border-0 bg-secondary-color  lg:w-40 lg:h-h-61 rounded-full justify-center items-center gap-3 overflow-hidden">
                        <span class="text-main-color font-normal text-f16 lg:text-f21">Search</span>
                        <img class="lg:w-w-21 lg:h-h-21 h-h-18 w-w-18" src="../assets/icon/search-icon.svg"
                            alt="search">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            movies: null,
            UserSearch: ''

        }
    },
    methods: {
        searchMovie() {
            fetch('https://imdb-api.com/en/API/SearchMovie/k_y8ym3ytl/' + this.UserSearch)
                .then(response => response.text())
                .then(response => JSON.parse(response))
                .then(response => {
                    this.movies = response.results
                });
        }
    }
}


</script>
