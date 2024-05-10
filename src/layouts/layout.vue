<script setup lang="ts">
  import { ChMenuHamburger, AnOutlinedClose } from '@kalimahapps/vue-icons';
  import { ref } from 'vue';
  const showResponsiveNav = ref(false);

  const toggleResponsiveNav = () => {
    showResponsiveNav.value = !showResponsiveNav.value;
  };
</script>

<template>
  <div
    class="grid grid-rows-[56px,auto] md:grid-rows-[64px,auto] grid-cols-[1fr] md:!grid-cols-[auto,1fr] w-full h-[100svh] custom-scrollbar">
    <!-- Sección de header) para móvil y desktop -->
    <header class="bg-dark-500 col-span-2 md:!px-8 flex items-center z-100">
      <button class="text-light-100 md:hidden" @click="toggleResponsiveNav">
        <!-- Ícono de menú para dispositivos móviles -->
        <ChMenuHamburger class="w-8 h-8 z-100" />
      </button>
      <img
        src="https://i.ibb.co/xjgLRRq/Logo.png"
        class="m-auto md:!ml-0 pt-4 h-[23px] w-10" />
    </header>
    <!-- Sección de navegación lateral (aside) para dispositivos móviles -->
    <aside
      v-if="showResponsiveNav"
      class="fixed inset-0 z-sidebar grid h-[100svh] grid-rows-[64px,auto,72px] bg-light-100">
      <header
        class="border-b border-solid border-light-300 flex items-center justify-between px-4">
        <img src="https://i.ibb.co/xjgLRRq/Logo.png" class="h-6" />
        <button type="button" @click="toggleResponsiveNav">
          <!-- Ícono de cierre para el menú desplegable en dispositivos móviles -->
          <AnOutlinedClose class="w-8 h-8" />
        </button>
      </header>
      <div class="overflow-y-auto">
        <!-- Menú de navegación para dispositivos móviles -->
        <!-- <NavBar :loading="loading" :options="menuItems" /> -->
      </div>
      <div class="border-t border-solid border-light-300">
        <!-- Sección de usuario para dispositivos móviles -->
        <!-- <NavUser
          :name="user?.fullName ?? 'Anónimo'"
          :role="user?.role ?? 'Desconocido'"
          @on-logout="logout" /> -->
      </div>
    </aside>
    <!-- Sección de contenido principal (main) común para móvil y desktop -->
    <main class="overflow-y-auto w-full bg-[#F9F9FA]">
      <RouterView />
    </main>
  </div>
</template>
