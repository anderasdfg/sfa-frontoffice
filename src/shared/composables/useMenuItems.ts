// import { computed } from 'vue';
// import { formatMenuItems } from '@/adapters/formatMenuItems';

// export const useMenuItems = () => {
//   const { menuItems } = useAuth();

//   const loading = computed(() => !menuItems.value);

//   const items = computed(() => {
//     if (!menuItems.value?.data) return undefined;
//     return formatMenuItems(menuItems.value.data);
//   });

//   return {
//     loading,
//     menuItems: items,
//   };
// };
