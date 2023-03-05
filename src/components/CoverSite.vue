<template>
    <div>

            <img :src="posterList" class="bg-cover bg-center h-h-264 lg:h-h-671 w-screen"  alt="coversite">
    </div>
</template>
<script>
export default{
    
    props:{
        posterList:Object
    }
}
</script>