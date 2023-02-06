<template>
    <div class="ml-[15px]">
        <h2 class="font-bold text-ftm lg:text-ftd mb-6 lg:mx-[132px]">More like this</h2>
            <ul class="flex-row flex gap-6 overflow-x-scroll flex-nowrap">
                 <li v-for="movie in fullMovies" class="shrink-0">
                    <img :src="movie.image" alt="similars" class="object-cover object-center  h-h-342 lg:w-w-276 lg:h-h-409 rounded-xl">
                    <div class="px-2.5 flex justify-between pt-3 ">
                            <p class="font-bold text-f16 lg:text-f18 truncate w-w-198">{{ movie.title }}</p>
                        <div class="inline-flex">
                            <img src="../assets/icon/star .svg" alt="star" class="">
                            <p class="pl-1.5 text-f16 lg:text-f18 font-normal opacity-40 ">{{ movie.imDbRating }}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <br><br><br><br>
</template>
<script>
export default{
    props:{
        fullMovies:Object
    }
}
</script>