<template>
    <div class="ml-[15px] mt-[-90px]">
        <h1 class="text-f32 lg:text-f48 font-bold pb-1.5">{{ esmeFilm }}</h1>
        <p class="text-f16 lg:text-f18 font-normal pb-5	lg:pb-6">Directors: {{ esmeKargardan }}</p>
        <div class="tracking-widest">
            <span class="text-f14 font-normal lg:text-f18">{{ sal }}</span>
             •
            <span class="text-f14 font-normal lg:text-f18">{{ baznevisi }}</span>
             •
            <span class="text-f14 font-normal lg:text-f18">{{ zamanejra }}</span>
        </div>
    </div>
</template>
<script>
export default{
    props:{
        esmeFilm: String,
        esmeKargardan: String,
        sal:String,
        baznevisi:String,
        zamanejra:String,
    }
}
</script>