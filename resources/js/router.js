import { createRouter, createWebHistory } from "vue-router";
import BlogComponent from "./components/blog/blogComponent.vue";
import TagComponent from "./components/blog/tagComponent";



const router = createRouter({
    history: createWebHistory(),
    routes
})

const routes = [
    { path: '/blog', component: BlogComponent },
    { path: '/tags', component: TagComponent },
]

export default route