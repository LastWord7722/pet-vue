import './bootstrap';
import { createApp } from 'vue';

const app = createApp({});


import PostComponent from './components/PostComponent.vue';

app.component('post-component123', PostComponent);

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

app.mount('#app');
