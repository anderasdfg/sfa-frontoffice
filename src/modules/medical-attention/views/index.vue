<script setup lang="ts">
const patient = {
    name: 'José Paredes Mesias',
    age: 23,
    sex: 'M',
    bloodType: 'O+',
    clinicalRecord: '8288',
    imgProfile: 'https://cdn.discordapp.com/attachments/750116396632899704/1240094286389706834/healthcare-medical-staff-concept-portrait-600nw-2281024823.png?ex=664b3e0d&is=6649ec8d&hm=cd20d4ba425def9788d916ae896358e868816c41d2ebb195035fa171e75c2127&'
} 
const appointment = {
    dateTime: '2024/05/18 8:00 AM',
    specialty: 'Cardiología',
    assignedDoctor: 'José Paredes Mesias',
    consultationReason: 'Presenta dolores en el corazón',
    observations: 'Es alérgico a los mariscos y pescados'
}

const handleClick = () => {
  console.log('Return button pressed');
};
</script>

<template>
    <div class="container">
      <div class="patient-data">
        <h2>PACIENTE:</h2>
        <div class="image">
            <img :src="patient.imgProfile">
        </div>
        <div class="patient-info">
            <div class="info-item">
                <strong>Nombre:</strong> {{ patient.name }}
            </div>
            <div class="info-item">
              <strong>Edad:</strong> {{ patient.age }}
            </div>
            <div class="info-item">
              <strong>Sexo:</strong> {{ patient.sex }}
            </div>
            <div class="info-item">
              <strong>Grupo Sanguíneo:</strong> {{ patient.bloodType }}
            </div>
            <div class="info-item">
              <strong>Nº Historia Clínica:</strong> <text>{{ patient.clinicalRecord }}</text>
            </div>
        </div>
      </div>
      <div class="appointment-details">
        <h2>Detalle de la Atención</h2>
        <div class="appointment-info">
            <div class="info-item">
                <p><strong>Fecha y Hora:</strong> {{ appointment.dateTime }}</p>
            </div>
            <div class="info-item">
                <p><strong>Especialidad:</strong> {{ appointment.specialty }}</p>
            </div>
        </div>
        <div class="info-item">
            <p><strong>Médico Asignado:</strong> {{ appointment.assignedDoctor }}</p>
        </div>
        <div class="info-item">
            <p><strong>Motivo de la Consulta:</strong> {{ appointment.consultationReason }}</p>
        </div>
        <div class="info-item">
            <p><strong>Observaciones:</strong> {{ appointment.observations }}</p>
        </div>
      </div>
      <div class="buttons">
        <button class="return-button" @click="handleClick">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"/></svg>
            Volver
        </button>
        <button class="init-button" @click="handleClick">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83z"/></svg>
            Iniciar atención
        </button>
      </div>
    </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05), 4px 4px 8px rgba(0, 0, 0, 0.025);
}
.patient-data {
  margin-bottom: 20px;

  h2 {
    margin-bottom: 10px;
    font-size: 1.3em;
    font-weight: bold;
    color: #4172F2;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  img {
    height: 150px;
    width: 150px;
    display: block;
    border-radius: 5px;
  }
  .patient-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-left: 60px;
    margin-right: 60px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  strong {
    color: #4172F2;
  }
  text {
    font-weight: bold;
  }
}
.appointment-details {
  margin-bottom: 20px;
  background-color: #f6f6f6;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05), 4px 4px 8px rgba(0, 0, 0, 0.025);
  border-radius: 15px;
  padding: 30px 60px 30px 60px;

  h2 {
    font-size: 1.3em;
    font-weight: bold;
    text-align: center;
  }
  .appointment-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 20px;
  }
  .info-item {
    margin-top: 10px;
  }
}
.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  button {
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
    gap: 10px;
    cursor: pointer;
  }

  .return-button {
    background-color: #F24141;
    transition: background-color 0.3s;
  }
  .return-button:hover {
    background-color: darkred;
  }
  .init-button {
    background-color: #21BE13;
    transition: background-color 0.3s;
  }
  .init-button:hover {
    background-color: darkgreen;
  }
  .arrow-icon {
    width: 24px;
    height: 24px;
  }
}
</style>