<script setup lang="ts">
import customAlert from '@/modules/medical-attention/components/customAlert.vue';

type Diagnostico = {
  codigo_enfermedad: string
  nombre_enfermedad: string
  observaciones: string[]
  tipo: string
  frecuencia: string
  examenes_auxiliares: ExamenesAuxiliares[]
  prescripcion: Prescripcion[]
}

 type ExamenesAuxiliares = {
  codigo: string
  nombre: string
  observaciones: string[]
  tipo: string
}

 type Prescripcion = {
  codigo: string
  nombre: string
  formula: string
  concentracion: string
  dosis: Dosis
}
type Dosis = {
  frecuencia: Administracion
  tiempo: Administracion
  cantidad: string
  via_administracion: string
  observaciones: string[]
}

 type Administracion = {
  valor: string
  medida: string
}

const props = defineProps<{
  diagnosticoMedico: Diagnostico[];
}>()
</script>

<template>
    <div class="card">
        <div class="header">
            <h1 class="title">Diagnóstico médico</h1>
            <button class="add-button">Agregar</button>
        </div>
        <div class="content">
            <customAlert v-if="diagnosticoMedico.length === 0" border-color="#ff7043" text-color="#ff7043">
              <template v-slot:icon>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 15h2v2h-2zm0-8h2v6h-2zm1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8"/></svg>
              </template>
              <template v-slot:text>
                <span>No se ha registrado ningún diagnostico</span>
              </template>
            </customAlert>
        </div>
    </div>
</template>

<style scoped>
.card {
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #A0B9F9;
    border-radius: 5px 5px 0px 0px;
    .title {
      font-weight: bold;
      color: white;
    }
    .add-button {
      color: #A0B9F9;
      border-radius: 5px;
      border: 1px solid white;
      background-color: white;
      padding: 5px 20px;
      transition: background-color 0.3s;
    }
    .add-button:hover {
      background-color: #A0B9F9;
      color: white;
      border: 1px solid white;
    }
}
.content {
    padding: 20px;
}
</style>