import { useInfiniteQuery } from '@tanstack/vue-query';
import { useMediaQuery } from '@vueuse/core';
import { computed } from 'vue';

import { adapterPatient } from '@/modules/dashboard-patient/adapters';
import { getPatientBasicInfo } from '@/modules/dashboard-patient/mocks/services';

export const usePatient = () => {
  const isScreenMobile = useMediaQuery('(max-width: 640px)');

  const {
    data,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['patient'],
    queryFn: () => getPatientBasicInfo(),
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length;
    },
    initialPageParam: 0,
  });

  return {
    refetch,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isLoading: computed(() => isFetching.value),
    isLoadingMobile: computed(() => isScreenMobile.value && isFetching.value),
    patient: computed(() => {
      return adapterPatient(data.value?.pages[0].data);
    }),
  };
};
