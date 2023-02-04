<template>
    <div class="mx-[15px]">
        <h2 class="font-bold text-ftm lg:text-ftd">Photos</h2>
        
            <div class="flex object-cover object-center aspect-w-2 aspect-h-1 gap-2">
            <img v-for="img in listKameleImgs" :src="img.image" alt="photos" class="rounded-xl  w-1/2 ">
            </div>
    </div>
    <br><br><br>
</template>
<script>
export default{
    props:{
        listKameleImgs:Object 
    }
}
</script>