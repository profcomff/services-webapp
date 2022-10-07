import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/apps',
    name: 'services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/apps/404',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
