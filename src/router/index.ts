import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostRegister from '../views/PostRegister.vue'
import PostDetail from '../views/PostDetail.vue'
import PostUpdate from '../views/PostUpdate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts/register',
      name: 'postRegister',
      component: PostRegister
    },
    {
      path: '/posts/:postId',
      name: 'postDetail',
      component: PostDetail
    },
    {
      path: '/posts/update/:postId',
      name: 'postUpdate',
      component: PostUpdate
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
