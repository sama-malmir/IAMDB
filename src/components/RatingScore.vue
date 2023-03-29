<template>
    <div class="hidden lg:block mt-9 relative ">
    <div class="flex">
        <circle-progress
      :is="component"
      :progress="progress"
      :percent="ratings*10"
      color="rgba(238, 235, 221, 0.9)"
      :determinate="determinate"
      empty-color="rgba(238, 235, 221, 0.4)"
      :border-width="6"
      :border-bg-width="6"
      :size="80"
      
      animation="bounce 700 1000"
      :is-gradient="true"
      :gradient="{
        angle: 79,
        startColor: 'rgba(206, 18, 18, 1)',
        stopColor: 'rgba(206, 18, 18, 1)'
    }"
      
      :loading="loading"
      :no-data="noData"
    />
    <span class="absolute font-bold text-f25 top-6 left-5">{{ ratings }}</span>
    <div class=" lg:items-center ml-[18px] mt-[18px]">
        <p class="font-bold text-f18">{{ emtiyaz }}</p>
        <p class="font-normal text-f16 pt-1.5 w-max"> ratings on IMDB </p>
    </div>
    </div>
    
</div>
  </template>
<script>

import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
export default {
  components: {CircleProgress},
  props: {
    ratings:String,
    emtiyaz: String,
    }
    }
    
</script>