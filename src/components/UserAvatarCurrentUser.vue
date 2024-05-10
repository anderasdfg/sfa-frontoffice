<script setup>
  //   import { useMainStore } from '@/stores/main';
  import UserAvatar from '@/components/UserAvatar.vue';

  //   const mainStore = useMainStore();
</script>

<template>
  <UserAvatar
    username="Usuario"
    avatar="https://www.unitecoprofesional.es/blog/wp-content/uploads/2021/08/Medico-paciente-2.jpg">
    <slot />
  </UserAvatar>
</template>
