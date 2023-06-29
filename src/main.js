import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Pdf from './components/Pdf.vue';
import Home from './components/Home.vue';
import Clients from './components/Clients.vue';
import Sample from './components/Sample.vue';
import './styles.css';
import ResizeTextarea from 'resize-textarea-vue3';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/Pdf', component: Pdf },
    { path: '/Clients', component: Clients },
    { path: '/Sample', component: Sample }
  ],
});

createApp(App).use(router).use(ResizeTextarea).mount('#app');