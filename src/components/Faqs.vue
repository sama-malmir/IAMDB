<template>
    <div class="mx-[15px] lg:ml-[132px] lg:mr-[110px]">
        <h2 class="font-bold text-ftm lg:text-ftd mb-6">FAQs</h2>
            <ul>
                <li v-for="faq in faqs">
                    <h2 class="font-bold text-f18 lg:text-f21 pb-1.5">{{ faq.question }}</h2>
                    <p class="font-normal text-f12 lg:text-f16 opacity-60 border-l-4 border-secondary-color pl-7 pb-3">{{ faq.answer }}</p>
                </li>
            </ul>
    </div>
</template>
<script>
export default{
    props:{
        faqs:Object
    }
}
</script>