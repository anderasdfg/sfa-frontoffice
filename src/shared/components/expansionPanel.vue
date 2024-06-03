<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

function toggle() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
    <div class="expansion-panel">
      <div :class="['expansion-panel-header', { open: isOpen }]" @click="toggle">
        <slot name="header"></slot>
        <svg :class="['arrow', { 'rotate': isOpen }]" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m7 10l5 5m0 0l5-5"/></svg>
      </div>
      <div class="expansion-panel-content" v-show="isOpen">
        <slot name="content"></slot>
      </div>
    </div>
</template>

<style>
.expansion-panel-header {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 10px 20px 10px 20px;
  background-color: white;
  border: 1px solid #ddd;
  color: #4172F2;
  font-weight: bold;
  transition: box-shadow 0.3s;
}

.expansion-panel-header:hover {
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  background-color:#f1f1f1;
}

.expansion-panel-header.open {
  border-bottom: 2px solid;
}

.arrow {
  transition: transform 0.3s; 
}

.rotate {
  transform: rotate(180deg);
}

.expansion-panel-content {
  padding: 10px 20px 10px 20px;
  border: 1px solid #ddd;
  border-top: none;
}
</style>