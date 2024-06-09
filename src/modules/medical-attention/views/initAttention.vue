<script setup lang="ts">
import expansionPanel from '@/shared/components/expansionPanel.vue';
import previousMedication from '@/modules/medical-attention/components/previousMedication.vue';
import vitalSigns from '@/modules/medical-attention/components/vitalSigns.vue';
import medicalDiagnostic from '@/modules/medical-attention/components/medicalDiagnostic.vue';
import { onMounted } from 'vue';

const maxRetriesOnLoadCall = 3;
const patient = {
    name: 'José Paredes Mesias',
    age: 23,
    dni: '72491559',
    motivo: 'Me disloque el hombro'
} 
const medicacionPrevia = [
    {
      "codigo": "001",
      "nombre": "MUCOPLUS G;15 mg/ 5 mL;Solución Oral",
      "dosis": "por el Analfabeto",
      "observaciones": ["El paciente se rehusa a seguir la medicacion previa por el analfabeto", "Segun dicen es mejor por ahí"]
    }
]
const diagnosticoMedico = [];
let retryOnLadCall = 0;
const onLoadCall = () => {
    try {
       const options = {
          roomName: "vpaas-magic-cookie-51b1afa1344d46619e835336d4303577/SampleAppVisibleWillsAdministerPatiently",
          width: 600,
          height: 360,
          parentNode: document.querySelector('#jaas-container')
       };
       const api = new JitsiMeetExternalAPI("8x8.vc", options);
    } catch (e) {
        if (retryOnLadCall < maxRetriesOnLoadCall) {
            retryOnLadCall++;
            setTimeout(() => {
                onLoadCall();
            }, 1000);
        }
        console.log(e);
    }
}

onMounted(() => {
    onLoadCall();
});
</script>
<template>
    <div class="container">
        <div class="top-container">
            <div id="jaas-container" class="call-container"></div>
            <div class="patient-data">
                <h1 class="title">Datos del paciente</h1>
                <p> <strong>Nombre:</strong> {{ patient.name }} </p>
                <p> <strong>Edad:</strong> {{ patient.age }} </p>
                <p> <strong>DNI:</strong> {{ patient.dni }} </p>
                <strong>Motivo de la consulta:</strong>
                <p>{{ patient.motivo }}</p>
            </div>
        </div>
        <div class="bottom-container">
            <expansionPanel>
                <template v-slot:header>
                    Anamnesis
                </template>
                <template v-slot:content>
                    <div>
                        <textarea  placeholder="Ingrese la anamnesis..." rows="4"></textarea>
                    </div>
                </template>
            </expansionPanel>
            <expansionPanel>
                <template v-slot:header>
                    Medicación
                </template>
                <template v-slot:content>
                    <previousMedication :medicacionPrevia="medicacionPrevia"></previousMedication>
                </template>
            </expansionPanel>
            <expansionPanel>
                <template v-slot:header>
                    Signos vitales
                </template>
                <template v-slot:content>
                    <vitalSigns></vitalSigns>
                </template>
            </expansionPanel>
            <expansionPanel>
                <template v-slot:header>
                    Diagnóstico
                </template>
                <template v-slot:content>
                    <medicalDiagnostic :diagnosticoMedico="diagnosticoMedico"></medicalDiagnostic>
                </template>
            </expansionPanel>
            <expansionPanel>
                <template v-slot:header>
                    Indicaciones
                </template>
                <template v-slot:content>
                    <div>
                        <textarea  placeholder="Ingrese la anamnesis..." rows="4"></textarea>
                    </div>
                </template>
            </expansionPanel>
        </div>
    </div>
</template>
<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05), 4px 4px 8px rgba(0, 0, 0, 0.025);
  }
  .top-container {
    display: flex;
    color: black;
    .title {
        font-size: 1.3em;
        font-weight: bold;
        color: #4172F2;
        text-align: center;
        margin-bottom: 10px;
    }
    strong {
        color: #4172F2;
    }
    .patient-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        margin-left: 40px;
        margin-right: 40px;
    }
  }
  .bottom-container {
    margin-top: 30px;
    margin-bottom: 20px;
  }
  textarea {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
  }
  textarea:focus {
    border-color: white;
    --tw-ring-color: #ccc;
  }
</style>