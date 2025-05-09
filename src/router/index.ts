import { createRouter, createWebHistory } from 'vue-router';
import DocLayout from '../views/DocLayout.vue';
import ButtonDoc from '../views/ButtonDoc.vue';
import DragResizeGridDoc from '../views/DragResizeGridDoc/index.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DocLayout,
      children: [
        {
          path: '',
          redirect: '/button'
        },
        {
          path: '/button',
          component: ButtonDoc
        },
        {
          path: '/drag-resize-grid',
          component: DragResizeGridDoc
        }
      ]
    }
  ]
});

export default router; 