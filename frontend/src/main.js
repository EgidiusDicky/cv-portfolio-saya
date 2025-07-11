import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import animateOnScroll from './directives/animateOnScroll';
import axios from 'axios'; // <--- ADD THIS LINE

const app = createApp(App);

// --- AXIOS GLOBAL CONFIGURATION ---
// This is crucial for handling API calls correctly in both development and production.
// In development, it will default to http://localhost:3000.
// On Vercel, with your vercel.json, the base URL will be the deployed frontend's URL,
// and Vercel will internally route /api requests to your backend function.
axios.defaults.baseURL = import.meta.env.VITE_APP_BACKEND_URL || 'http://localhost:3000';

// --- AXIOS RESPONSE INTERCEPTOR (optional, but good for global error logging) ---
// This will catch any HTTP errors (like 404, 500) globally.
axios.interceptors.response.use(
    response => response, // If the response is successful, just return it
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