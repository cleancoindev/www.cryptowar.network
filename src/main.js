import { createApp } from 'vue'
import App from './App.vue'
// import Home from './pages/Home.vue'
import router from "./router";



// createApp(App).mount('#app')
// createApp(App, router).mount('#app')
createApp(App).use(router).mount('#app')
