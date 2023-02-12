<template>
    <div class="mx-[15px] ">
        <p class="font-normal opacity-60 text-f16 lg:text-f18 lg:w-w-504">{{ Description }}</p>
        <h2 class="font-bold text-ftm lg:text-ftd">Details</h2>
        <div class=" w-w-330 ">
            <div class="flex columns-2 border-b border-border-0.1 items-center py-1.5	">
                <p class="text-f16 font-bold lg:text-f18 w-full">Writers </p>
                <span class="text-f14 font-normal opacity-60 lg:text-f16 w-full">{{ writersName }}</span>
            </div>
            <div class="flex columns-2 border-b border-border-0.1 items-center py-1.5	">
                <p class="text-f16 font-bold lg:text-f18 w-full">Genres </p>
                <span class="text-f14 font-normal opacity-60 lg:text-f16 w-full">{{ genresMovie }}</span>
            </div>
            <div class="flex columns-2 border-b border-border-0.1 items-center py-1.5	">
                <p class="text-f16 font-bold lg:text-f18 w-full">Awards </p>
                <span class="text-f14 font-normal opacity-60 lg:text-f16 w-full">{{ awardsMovie }}</span>
            </div>
            <div class="flex columns-2 items-center py-1.5	">
                <p class="text-f16 font-bold lg:text-f18 w-full">Country of Origin </p>
                <span class="text-f14 font-normal opacity-60 lg:text-f16 w-full">{{ countrises }}</span>
            </div>
           <div class="flex columns-2 border-t border-border-0.1 lg:hidden items-center py-1.5">
                <p class="text-f16 font-bold  lg:text-f18  w-full">IMDB Rating</p>
                <span class="text-f14 font-normal opacity-60 lg:text-f16  w-full">{{ ratings }}</span>
           </div> 
        </div>
    </div>
</template>
<script>
export default{
    props:{
        Description:String,
        writersName:String,
        genresMovie:String,
        awardsMovie:String,
        countrises:String,
        ratings:String,
    }
}
</script>