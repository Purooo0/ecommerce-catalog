import { createApp } from 'vue';  // Menggunakan createApp untuk Vue 3
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';  // Menggunakan createRouter dan createWebHistory

// Import komponen yang akan digunakan di route
import WomenSection from './views/WomenSection.vue';
import MenSection from './views/MenSection.vue';
import UnavailableSection from './views/UnavailableSection.vue';

// Konfigurasi routes
const routes = [
  { path: '/women', component: WomenSection },
  { path: '/men', component: MenSection },
  { path: '/unavailable', component: UnavailableSection },
];

// Buat router menggunakan createRouter
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Buat aplikasi Vue dan gunakan router
createApp(App)
  .use(router)  // Pastikan untuk menghubungkan router ke aplikasi Vue
  .mount('#app');
