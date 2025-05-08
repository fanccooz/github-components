import { createRouter, createWebHistory } from 'vue-router';
import ButtonDemo from '../views/ButtonDemo.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/button-demo'
    },
    {
      path: '/button-demo',
      name: 'ButtonDemo',
      component: ButtonDemo
    }
  ]
});

export default router; 