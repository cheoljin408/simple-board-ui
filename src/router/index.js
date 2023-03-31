import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('./../views/Posts.vue')
    },
    {
        path: '/register/post',
        component: () => import('./../views/RegisterPost.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router