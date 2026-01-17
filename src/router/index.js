import { createRouter, createWebHistory } from 'vue-router';
import ComponentDataFlowView from '@/views/data-flow/ComponentDataFlowView.vue';
import RouterDataFlowView from '@/views/data-flow/RouterDataFlowView.vue';
import LoginView from '@/views/example/LoginView.vue';
import ProtectedView from '@/views/example/ProtectedView.vue';
import { useAuthStore } from '@/stores/authStore';

const routes = [
    {
        path: '/data-flow',
        children: [
            {
                path: 'component',
                name: 'component-data-flow',
                component: ComponentDataFlowView,
            },
            {
                path: 'router/:id?',
                name: 'router-data-flow',
                component: RouterDataFlowView,
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
    },
    {
        path: '/protected',
        name: 'protected',
        component: ProtectedView,
        meta: {
            requiresAuth: true,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to) => {
    const authStore = useAuthStore();
    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        return {
            name: 'login',
            query: {
                redirect: to.fullPath,
                reason: 'auth',
            },
        };
    }
});

export default router;