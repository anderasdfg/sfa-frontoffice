<script setup lang="ts">
  import { mdiForwardburger, mdiBackburger, mdiMenu } from '@mdi/js';
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  //   import menuAside from '@/menuAside.js';
  //   import menuNavBar from '@/menuNavBar.js';
  import { useDarkModeStore } from '../shared/store/darkMode';
  import BaseIcon from '@/components/BaseIcon.vue';
  //   import FormControl from '@/components/FormControl.vue';
  import NavBar from '@/components/NavBar.vue';
  import NavBarItemPlain from '@/components/NavBarItemPlain.vue';
  import AsideMenu from '../components/AsideMenu.vue';
  import FooterBar from '@/components/FooterBar.vue';
  import SectionMain from '@/components/SectionMain.vue';
  import { getNavOptions, getNavTopOptions } from '../shared/mocks/services';
  const layoutAsidePadding = 'xl:pl-60';

  const darkModeStore = useDarkModeStore();

  const router = useRouter();

  const isAsideMobileExpanded = ref(false);
  const isAsideLgActive = ref(false);

  router.beforeEach(() => {
    isAsideMobileExpanded.value = false;
    isAsideLgActive.value = false;
  });

  const menuClick = (
    _event: unknown,
    item: { isToggleLightDark: unknown; isLogout: unknown },
  ) => {
    if (item.isToggleLightDark) {
      darkModeStore.set();
    }

    if (item.isLogout) {
      //
    }
  };

  const navbarOptions = ref();
  const getNavbarOptions = async () => {
    const options = await getNavOptions();
    navbarOptions.value = options;
  };

  const navTopOptions = ref();
  const getNavToppOptions = async () => {
    const options = await getNavTopOptions();
    navTopOptions.value = options;
  };

  onMounted(() => {
    getNavbarOptions();
    getNavToppOptions();
  });
</script>

<template>
  <div
    :class="{
      'overflow-hidden lg:overflow-visible': isAsideMobileExpanded,
    }">
    <div
      :class="[layoutAsidePadding, { 'ml-60 lg:ml-0': isAsideMobileExpanded }]"
      class="pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
      <NavBar
        :menu="navTopOptions"
        :class="[
          layoutAsidePadding,
          { 'ml-60 lg:ml-0': isAsideMobileExpanded },
        ]"
        @menu-click="menuClick">
        <NavBarItemPlain
          display="flex lg:hidden"
          @click.prevent="isAsideMobileExpanded = !isAsideMobileExpanded">
          <BaseIcon
            :path="isAsideMobileExpanded ? mdiBackburger : mdiForwardburger"
            size="24" />
        </NavBarItemPlain>
        <NavBarItemPlain
          display="hidden lg:flex xl:hidden"
          @click.prevent="isAsideLgActive = true">
          <BaseIcon :path="mdiMenu" size="24" />
        </NavBarItemPlain>
        <NavBarItemPlain use-margin>
          <!-- <FormControl
            placeholder="Search (ctrl+k)"
            ctrl-k-focus
            transparent
            borderless /> -->
        </NavBarItemPlain>
      </NavBar>
      <AsideMenu
        :is-aside-mobile-expanded="isAsideMobileExpanded"
        :is-aside-lg-active="isAsideLgActive"
        :menu="navbarOptions"
        @menu-click="menuClick"
        @aside-lg-close-click="isAsideLgActive = false" />
      <SectionMain />
      <FooterBar>
        Get more with
        <a
          href="https://tailwind-vue.justboil.me/"
          target="_blank"
          class="text-blue-600"
          >Premium version</a
        >
      </FooterBar>
    </div>
  </div>
</template>
