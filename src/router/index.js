import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/apps',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/apps/browser',
    component: () => import('../views/Browser.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
