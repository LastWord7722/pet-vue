import './bootstrap';
import { createApp } from 'vue';
import router from "./router.js";

const app = createApp({});

import index from "./components/blog/index.vue";

app.component('Index', index)

app.use(router)

app.mount('#app');
