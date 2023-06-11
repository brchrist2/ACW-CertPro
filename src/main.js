
console.log("bret 1");

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';

console.log("bret 2");

Vue.use(VueRouter);


console.log("bret 3");

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

console.log("bret 4");

const router = new VueRouter({
  routes,
});

console.log("bret 5");

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
