import { defineStore } from 'pinia';
import { ref } from 'vue';

interface DarkModeStore {
  isEnabled: Ref<boolean>;
  set: (payload?: boolean | null) => void;
}

export const useDarkModeStore = defineStore('darkMode', () => {
  const isEnabled = ref<boolean>(false);

  function set(payload: boolean | null = null): void {
    isEnabled.value = payload !== null ? payload : !isEnabled.value;

    if (typeof document !== 'undefined') {
      document.body.classList[isEnabled.value ? 'add' : 'remove'](
        'dark-scrollbars',
      );

      document.documentElement.classList[isEnabled.value ? 'add' : 'remove'](
        'dark',
        'dark-scrollbars-compat',
      );
    }
  }

  return {
    isEnabled,
    set,
  } as DarkModeStore;
});
