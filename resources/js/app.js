import './bootstrap';
import { createApp } from 'vue';
import router from "./router.js";

const app = createApp({});
import index from "./components/index.vue";

app.component('index', index)

app.use(router)

app.mount('#app');
