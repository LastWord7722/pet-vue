import './bootstrap';
import { createApp } from 'vue';

const app = createApp({});

import index from "./components/blog/index.vue";

import comp1 from "./components/comp1.vue";
import persons from "./components/person/person.vue";

app.component('comp1', comp1)
app.component('persons', persons)
app.component('index', index)

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

app.mount('#app');
