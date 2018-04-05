import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './views/App.vue';
import Brand from './views/Brand.vue';
import Projects from './views/Projects.vue';
import Contacts from './views/Contacts.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: App },
    { path: '/brand', component: Brand },
    { path: '/projects', component: Projects },
    { path: '/contacts', component: Contacts }
  ]
});

new Vue({
  el: '#app',
  router: router
});
