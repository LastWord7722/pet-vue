import './bootstrap';
import { createApp } from 'vue';

const app = createApp({});

import comp1 from "./components/comp1.vue";

app.component('comp1', comp1)

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

app.mount('#app');
