import { createApp } from 'vue'
import App from './App.vue'
import anime from 'animejs';
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
// import VueRouterSlider from 'vue-router-slider'

createApp(App).use(router).use(anime).mount('#app');

