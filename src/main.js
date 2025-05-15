import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import komponen yang akan digunakan
import ProductDisplay from './components/ProductDisplay.vue';  // Pastikan ProductDisplay terhubung

// Konfigurasi routes
const routes = [
  { path: '/men', component: ProductDisplay },
  { path: '/women', component: ProductDisplay },
  { path: '/unavailable', component: ProductDisplay },
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
