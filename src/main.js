import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Pdf from './components/Pdf.vue';
import Home from './components/Home.vue';
import Clients from './components/Clients.vue';
import './styles.css';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/Pdf', component: Pdf },
    { path: '/Clients', component: Clients },
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');