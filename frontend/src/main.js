import './assets/main.css' // Import global CSS

import { createApp } from 'vue' // Import createApp function from Vue
import App from './App.vue'     // Import your root component
import router from './router'   // Import your Vue Router instance
import animateOnScroll from './directives/animateOnScroll' // Import your custom directive

// 1. Create the Vue application instance and assign it to 'app'
//    This is the crucial step that was missing or out of order.
const app = createApp(App)

// 2. Now that 'app' is the Vue application instance, you can call its methods:
//    Register your custom directive globally
app.directive('animate-on-scroll', animateOnScroll)

//    Use your router plugin
app.use(router)

//    Mount the application to the DOM element with id 'app'
app.mount('#app')

// Explanation of changes:
// - `const app = createApp(App)`: This line initializes your Vue application
//   and assigns the returned application instance to the `app` constant.
//   All subsequent calls like `app.directive`, `app.use`, and `app.mount`
//   must be made *after* this line.


