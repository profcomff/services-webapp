import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/404',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory('/apps'),
  routes
});

export default router;
