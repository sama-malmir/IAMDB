<template>
    <div class="mx-[15px] lg:ml-[132px] lg:mr-[110px]">
        <h2 class="font-bold text-ftm lg:text-ftd mb-6">FAQs</h2>
            
                <div v-for="(faq, index) in faqs" class="pb-3">
                        <h2 @click="showAnswer(index)"  class="font-bold text-f18 lg:text-f21 pb-1.5 ">{{ faq.question }}</h2>
                        <p v-show="isOpen(index)" class="font-normal text-f12 lg:text-f16 opacity-60 border-l-4 border-secondary-color pl-7 pb-3 cursor-pointer ">{{ faq.answer }}</p>
                </div>
            
    </div>
</template>
<script>
export default{
    data(){
        return{
           akharinClick: null
        }
    },
    props:{
        faqs:Object
    },
    methods: {
       showAnswer(index){
        if(index===this.akharinClick){
            this.akharinClick=null
        }else{
            this.akharinClick=index
        }
       },
       isOpen(index){
        return this.akharinClick == index
       },
    }
    
    
}
</script>