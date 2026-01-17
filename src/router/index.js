import { createRouter, createWebHistory } from 'vue-router';
import ComponentDataFlowView from '@/views/data-flow/ComponentDataFlowView.vue';
import RouterDataFlowView from '@/views/data-flow/RouterDataFlowView.vue';

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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;