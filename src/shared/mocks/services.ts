import { apiGetNavOptions, apiGetNavTopOptions } from './api';
import type { MenuItem } from '../types/menuItem';

export const getNavOptions = (): Promise<MenuItem> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(apiGetNavOptions), 1000),
  );
};

export const getNavTopOptions = (): Promise<MenuItem> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(apiGetNavTopOptions), 1000),
  );
};
