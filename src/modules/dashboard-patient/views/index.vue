<script langs="ts" setup>
  import { usePatient } from '../composables/usePatient.ts';

  const { patient } = usePatient();
</script>
<template>
  <div>
    <h1>Información del paciente </h1>
    {{ patient }}
  </div>
</template>
