import type { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../../layouts/LayoutPatient.vue'),
    children: [
      {
        path: '/dashboard-patient',
        name: 'dashboard-patient-view',
        component: () =>
          import('../../modules/dashboard-patient/views/index.vue'),
      },
      {
        path: '/dashboard-doctor',
        name: 'dashboard-doctor-view',
        component: () =>
          import('../../modules/dashboard-doctor/views/index.vue'),
      }
    ],
  },
];
