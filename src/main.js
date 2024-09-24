import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide';
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App)

app.config.globalProperties.$aos = AOS;
app.use(router)
app.use(VueSplide)

app.mount('#app')
AOS.init({
    duration:1500
});
