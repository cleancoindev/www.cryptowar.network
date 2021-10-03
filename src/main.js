import { createApp } from "vue";
import App from "./App.vue";
// import Home from './pages/Home.vue'
import router from "./router";
import { Buffer } from "buffer";
import { store } from "./store";

// @ts-ignore
window.Buffer = Buffer;
createApp(App).use(store).use(router).mount("#app");
