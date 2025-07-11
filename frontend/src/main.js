import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import animateOnScroll from './directives/animateOnScroll';
import axios from 'axios'; // Import Axios

const app = createApp(App);

// --- AXIOS GLOBAL CONFIGURATION ---
// Set axios.defaults.baseURL based on the environment
// In development (npm run dev), import.meta.env.DEV is true.
// In production (Vercel build), import.meta.env.PROD is true.
axios.defaults.baseURL = import.meta.env.DEV
    ? 'http://localhost:3000' // Local development backend URL
    : '/'; // Relative path for Vercel deployment (handled by vercel.json routes)

// --- AXIOS RESPONSE INTERCEPTOR (optional, but good for global error logging) ---
axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            console.error('API Error:', error.response.status, error.response.data);
        } else if (error.request) {
            console.error('Network Error:', error.request);
        } else {
            console.error('Error', error.message);
        }
        return Promise.reject(error);
    }
);

app.directive('animate-on-scroll', animateOnScroll);
app.use(router);
app.mount('#app');
