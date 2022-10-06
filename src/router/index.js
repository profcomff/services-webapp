import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
  path: '/',
  name: 'services',
  component: () => import('../views/Services.vue')
}];

const router = createRouter({
  history: createWebHistory('/apps'),
  routes
});

export default router;
