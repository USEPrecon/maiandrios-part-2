import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/DataEntry.vue')
  },
  {
    path: '/DataSubmission',
    name: 'DataSubmission',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/DataSubmission.vue')
  },
  {
    path: '/CodeReference',
    name: 'CodeReference',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    component: () => import( '../views/CodeReference.vue')
  },
  {
    path: '/CodeManager',
    name: 'CodeManager',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    component: () => import( '../views/CodeManager.vue')
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
