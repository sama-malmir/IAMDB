<template>
    <div class="ml-[15px] inline-flex">
       <div class="relative">
        <button @click="isOpen=!isOpen" type="button" class=" w-11 h-11 border-2 rounded-full hover:bg-hover-btnlinks  lg:w-w-61 lg:h-h-61  ">
                <img  src="../assets/icon/share2.svg" target="-blank" alt="btn link" class="scale-100 absolute bottom-2.5 left-[9px] lg:left-4 lg:bottom-5	"/>
        </button>
        <ul v-if="isOpen" class="list-none flex flex-col w-44 bg-back-ground cursor-pointer absolute bottom-full left-0">
            <li class="p-3 hover:bg-back-ground opacity-50 ">
                <s-facebook
            :window-features="windowFeatures"
            :share-options="facebookShareOptions"
            :use-native-behavior="useNativeBehavior"
            @popup-close="onClose"
            @popup-open="onOpen"
            @popup-block="onBlock"
            @popup-focus="onFocus">
            <div class="inline-flex gap-3">
                        <img class="w-7 h-7" src="../assets/icon/icons8-facebook-24.png" alt="Facebook">
                        <span class="font-semibold text-xl">Facebook</span>
                    </div>
                </s-facebook>
                
            </li>
            <li class="p-3 hover:bg-back-ground opacity-50">
                <s-twitter
                    :window-features="windowFeatures"
                    :share-options="twitterShareOptions"
                    :use-native-behavior="useNativeBehavior"
                    @popup-close="onClose"
                    @popup-open="onOpen"
                    @popup-block="onBlock"
                    @popup-focus="onFocus">
                    <div class="inline-flex gap-3">
                        <img class="w-7 h-7" src="../assets/icon/icons8-twitter-30.png" alt="Twitter">
                        <span class="font-semibold text-xl">Twitter</span>
                    </div>
                </s-twitter>
                
            </li>
            <li class="p-2 hover:bg-back-ground opacity-50">
                <s-evernote
                        :window-features="windowFeatures"
                        :share-options="shareOptions"
                        :use-native-behavior="useNativeBehavior"
                        @popup-close="onClose"
                        @popup-open="onOpen"
                        @popup-block="onBlock"
                        @popup-focus="onFocus">
                        <div class="inline-flex gap-3">
                        <img class="w-7 h-7" src="../assets/icon/icons8-envelope-30.png" alt="Email Link">
                        <span class="font-semibold text-xl">Email Link</span>
                    </div>
            </s-evernote>
            </li>
            <li class="p-2 hover:bg-back-ground opacity-50">4</li>

        </ul>
       </div>
    
    
        </div>
        <div class=" w-11 h-11 border-2 rounded-full hover:bg-hover-btnlinks lg:w-w-61 lg:h-h-61 ml-4 relative">
            <img src="../assets/icon/like2.svg" alt="btn link" class="scale-100 absolute bottom-2.5	left-2.5 lg:bottom-[18px] lg:left-[17px]"/>
        </div>
    

</template>
<script>
export default{
    data() {
    return {
      isOpen: false
    }
  },
//     data () {
        
//     return {
//       windowFeatures: {},
//       facebookShareOptions: {
//         url: 'https://github.com/',
//         quote: 'Quote',
//         hashtag: '#Github',
//       },
//       twitterShareOptions: {
//         url: 'https://github.com/',
//         text: 'Hello world',
//         hashtags: ['hash', 'tag'],
//         via: 'twitterdev',
//       },
//       useNativeBehavior: false,
//     }
    
//   },
  methods:{
    
    onClose() {},
    onOpen() {},
    onBlock() {},
    onFocus() {},
  }
}
</script>