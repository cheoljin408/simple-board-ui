import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('./../views/Posts.vue')
    },
    {
        path: '/new/post',
        component: () => import('./../views/RegisterPost.vue')
    },
    {
        path: '/posts',
        component: () => import('./../views/Posts.vue')
    },
    {
        path: '/posts/:postId',
        component: () => import('./../views/Post.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 항상 맨 위로 스크롤
        return { top: 0 }
    },
})

export default router