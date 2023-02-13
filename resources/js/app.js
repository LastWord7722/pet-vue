import './bootstrap';
import { createApp } from 'vue';

const app = createApp({});

import comp1 from "./components/comp1.vue";
import persons from "./components/person.vue";
import valuta from "./components/valuta.vue";

app.component('comp1', comp1)
app.component('persons', persons)
app.component('valuta', valuta)

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

app.mount('#app');
