import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/posts',
        component: () => import('./../views/Posts.vue')
    },
    {
        path: '/new/post',
        component: () => import('./../views/RegisterPost.vue')
    },
    {
        path: '/posts/:postId',
        component: () => import('./../views/Post.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router