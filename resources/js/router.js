import { createRouter, createWebHistory } from "vue-router";
import BlogComponent from "./components/blog/blogComponent.vue";
import TagComponent from "./components/blog/tagComponent.vue";

const routes = [
    { path: '/public/blog', name: 'blog', component: BlogComponent },
    { path: '/public/tags', name: 'tag', component: TagComponent },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router