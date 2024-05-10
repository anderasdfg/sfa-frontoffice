<script setup lang="ts">
  import AsideMenuLayer from '@/components/AsideMenuLayer.vue';
  import OverlayLayer from '@/components/OverlayLayer.vue';

  // Define las propiedades esperadas del componente
  const props = defineProps({
    menu: {
      type: Array,
      required: true,
    },
    isAsideMobileExpanded: Boolean,
    isAsideLgActive: Boolean,
  });

  // Define los eventos que puede emitir el componente
  const emit = defineEmits(['menu-click', 'aside-lg-close-click']);

  // Define las funciones del componente
  const menuClick = (event, item) => {
    emit('menu-click', event, item);
  };

  const asideLgCloseClick = (event) => {
    emit('aside-lg-close-click', event);
  };
  // Accede a la prop menu
</script>

<template>
  <AsideMenuLayer
    :menu="props.menu"
    :class="[
      props.isAsideMobileExpanded ? 'left-0' : '-left-60 lg:left-0',
      { 'lg:hidden xl:flex': !props.isAsideLgActive },
    ]"
    @menu-click="menuClick"
    @aside-lg-close-click="asideLgCloseClick" />
  <OverlayLayer
    v-show="props.isAsideLgActive"
    z-index="z-30"
    @overlay-click="asideLgCloseClick" />
</template>
