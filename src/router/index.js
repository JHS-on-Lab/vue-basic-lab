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
    path: '/account-linking-status',
    name: 'account-linking-status',
    component: () => import('@/views/auth/AccountLinkingStatus.vue'),
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
    alert('You need to sign in to access this page.');
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