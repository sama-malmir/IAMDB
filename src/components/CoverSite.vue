<template>
    <div class="relative">
        <img :src="posterList"  alt="coversite" class="w-full h-h-264 lg:h-h-671 bg-cover bg-no-repeat bg-top absolute">
        <div class="absolute bottom-0 w-screen h-screen bg-cover bg-no-repeat bg-top bg-gradient-to-t from-gradient-3 lg:via-gradient-2 via-gradient-2m to-gradient-1"></div>
    </div>
</template>
<script>
export default{
    
    props:{
        posterList:Object
    }
}
</script>