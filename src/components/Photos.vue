<template>
    <div class="mx-[15px] lg:mx-[132px]">
        <h2 class="font-bold text-ftm lg:text-ftd mb-6">Photos</h2>
        <viewer :images="listKameleImgs">
            <div class="grid grid-cols-2 gap-3 lg:gap-6 lg:grid-cols-5 ">
                <img v-for="src in listKameleImgs" :src="src.image" :key="src.image" alt=""
                    class="rounded-xl w-w-158 h-h-102 object-cover object-center lg:h-h-144 lg:w-w-216 cursor-pointer">
            </div>
        </viewer>
    </div>
    <br><br><br>
</template>
<script>

export default {
    data() {
        return {
        }
    },

    
    props: {
        listKameleImgs: Object
    },
    methods: {
    },
}
</script>