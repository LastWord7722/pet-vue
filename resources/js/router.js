import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path:'/public/index', component: () => import('./components/People/indexComponent.vue'),
     name: 'person.index'},

    {path:'/public/create', component: () => import('./components/People/CreateComponent.vue'),
     name: 'person.create'},

    {path:'/public/show', component: () => import('./components/People/ShowComponent.vue'),
     name: 'person.show'}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router