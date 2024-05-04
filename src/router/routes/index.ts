import type { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../../layouts/layout.vue'),
    children: [
      {
        path: '/dashboard-patient',
        name: 'dashboard-patient-view',
        component: () =>
          import('../../modules/dashboard-patient/views/index.vue'),
      },
    ],
  },
];
