<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  borderColor: String,
  textColor: String
});

const borderColor = ref(props.borderColor || '#ff7043');
const textColor = ref(props.textColor || '#ff7043');
</script>

<template>
    <div class="custom-alert" role="alert" :style="{ borderColor: borderColor, color: textColor }">
      <span class="alert-icon"> 
        <slot name="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 15h2v2h-2zm0-8h2v6h-2zm1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8"/></svg>
        </slot>
      </span>
      <slot name="text">
        <span class="alert-text">Nombre de la alerta</span>
      </slot>
    </div>
</template>

<style scoped>
.custom-alert {
  padding: 15px;
  border: 3px solid transparent;
  border-left-width: 8px;
  display: flex;
  align-items: center;
  background-color: white;
}

.alert-icon {
  margin-right: 10px;
}

.alert-text {
  flex: 1;
}
</style>