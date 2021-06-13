import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/admin',
    component: () => import('../views/DashBoard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/DashBoardProducts.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/DashBoardOrders.vue'),
      },
    ],
  },
  {
    path: '/about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/front',
    component: () => import('../views/Front.vue'),
  },
  {
    path: '/front/product/:id',
    component: () => import('../views/Product.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
