<script setup lang="ts">
  import { RouterView, useRouter } from 'vue-router';
  import { listenRemoteRoutes } from './router';
  const router = useRouter();
  listenRemoteRoutes(router);
</script>

<template>
  <RouterView />
</template>
