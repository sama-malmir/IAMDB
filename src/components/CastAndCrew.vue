<template>
    <div class="ml-[15px] mt-14">
        <h2 class="font-bold text-ftm lg:text-ftd">Cast & Crew</h2>
        <div v-for="bazigar in listeKameleBazigaran" class="flex py-6">
            <img :src="bazigar.image" alt="cast&crow" class="w-w-75 h-h-75 object-cover object-center rounded-full">
            <div class="flex flex-col justify-center pl-3">
                <p class="font-bold text-f16 pb-1.5"> {{ bazigar.name }}</p>
                <p class="opacity-60 font-normal text-f14 ">as {{ bazigar.asCharacter }}</p>
            </div>
        </div>
        <div >
            <a class="flex justify-center lg:justify-start pt-1.5" href="#">
                <span class="font-medium text-secondary-color  text-f18 ">Show all</span>
                <img src="../assets/icon/arrow.svg" alt="show all" class="w-w-21 h-h-21 ml-[15px]">
            </a>
        </div>
        </div>
</template>

<script>
export default {
    props: {
        listeKameleBazigaran: Object
    }
}
</script>

<style>

</style>