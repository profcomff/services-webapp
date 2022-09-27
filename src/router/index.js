import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
  path: '/apps',
  name: 'Services',
  component: () => import('../views/Services.vue')
}];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
