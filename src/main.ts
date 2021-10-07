import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);
app.use(VueSweetalert2);
// @ts-ignore
store.$app = app;

app
  .use(store)
  .use(router)
  .mount("#app");
