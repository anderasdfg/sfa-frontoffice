
<script setup lang="ts">
const props = defineProps({
  show: Boolean,
  width: String
});

const emits = defineEmits(['update:show']);

const close = () => {
  emits('update:show', false);
};
</script>

<template>
    <div v-if="show" class="modal">
      <div class="modal-content" :style="{ width: width }">
        <div class="modal-body">
            <slot name="body"></slot>
        </div>
        <div class="modal-footer">
            <button class="close-button" @click="close">Cerrar</button>
        </div>
      </div>
    </div>
</template>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 100 !important;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: var(--modal-width, 50%);
}

.modal-body {
    margin-bottom: 20px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}

.close-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #A0B9F9;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.close-button:hover {
  background-color: #657DC4;
}
</style>