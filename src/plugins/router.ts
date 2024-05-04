import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const moduleRoutes = Object.entries(
  import.meta.glob<{ routes: RouteRecordRaw[] }>('../router/index.ts', {
    eager: true,
  }),
).reduce((acc: RouteRecordRaw[], [, { routes }]) => {
  return [...acc, ...routes];
}, []);

const routes: Array<RouteRecordRaw> = [...moduleRoutes];
console.log(routes);
export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { left: 0, top: -80 };
  },
  routes,
});

router.beforeEach((to, from, next) => {
  return next();
});
