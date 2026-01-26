import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';

const routes = [
  {
    path: '/data-flow',
    children: [
      {
        path: 'component',
        name: 'component-data-flow',
        component: () => import('@/views/data-flow/ComponentView.vue'),
      },
      {
        path: 'router/:id?',
        name: 'router-data-flow',
        component: () => import('@/views/data-flow/RouterView.vue'),
      },
    ],
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/auth/SignupView.vue'),
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/auth/SigninView.vue'),
  },
  {
    path: '/protected',
    name: 'protected',
    component: () => import('@/views/ProtectedView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/oauth2/success',
    name: 'oauth2-success',
    component: () => import('@/views/auth/OAuth2SuccessView.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return {
      name: 'signin',
      query: {
        redirect: to.fullPath,
        reason: 'auth',
      },
    };
  }
});

export default router;