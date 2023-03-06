import { createApp } from 'vue'
import { createPinia } from 'pinia'



import App from './App.vue'
import router from './router'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import './assets/main.css'
import VueSocials from 'vue-socials'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueViewer)
app.use(VueSocials)

app.mount('#app')
