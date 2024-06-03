<script setup lang="ts">
import calendar from '@/shared/components/calendar.vue';
import cardDoctorData from '@/modules/dashboard-doctor/components/cardDoctorData.vue'
import cardDate from '@/modules/dashboard-doctor/components/cardDate.vue'
import { ref, onMounted, watch } from 'vue';

const scheduledAppointmentsList = [
  { day: '25', month: 'MAR', specialty: 'Cardiología', doctor: 'Dr. José', time: '08:00 AM' },
  { day: '25', month: 'MAR', specialty: 'Cardiología', doctor: 'Dr. José', time: '08:00 AM' },
  { day: '25', month: 'MAR', specialty: 'Cardiología', doctor: 'Dr. José', time: '08:00 AM' },
  { day: '25', month: 'MAR', specialty: 'Cardiología', doctor: 'Dr. José', time: '08:00 AM' }
];

const completedAppointmentsList = [
  { day: '23', month: 'MAR', specialty: 'Cardiología', doctor: 'Dr. José', time: '11:00 AM' },
  { day: '23', month: 'MAR', specialty: 'Cardiología', doctor: 'Dr. José', time: '08:00 AM' }
];

/*const completedAppointments = ref(null);
const scheduledAppointments = ref(null);
const displayedAppointments = ref([]);
const displayedCompletedAppointments = ref([]);

const calculateComponents = (appointmentsList, appointmentsRef, displayedAppointments) => {
  const componentHeight = 83;
  const container = appointmentsRef.value; 
  const containerHeight = container.offsetHeight; 

  const numberOfComponents = Math.floor(containerHeight / componentHeight);

  displayedAppointments.value = appointmentsList.slice(0, numberOfComponents);
};

onMounted(() => {
  calculateComponents(scheduledAppointmentsList, scheduledAppointments, displayedAppointments);
  calculateComponents(completedAppointmentsList, completedAppointments, displayedCompletedAppointments);
});

watch(() => window.innerHeight, () => {
  calculateComponents(scheduledAppointmentsList, scheduledAppointments, displayedAppointments);
  calculateComponents(completedAppointmentsList, completedAppointments, displayedCompletedAppointments);
});*/

</script>

<template>
  <div class="container">
    <div class="personal-data">
      <div class="user-data">
        <cardDoctorData/>
      </div>
      <div class="calendar">
        <calendar/>
      </div>
    </div>
    <div class="appointments">
      <div class="appointments-container">
        <h2>CITAS PENDIENTES</h2>
        <div class="scheduled-appointments" ref="scheduledAppointments">
          <cardDate class="card-date"
            v-for="(appointment, index) in scheduledAppointmentsList"
            :key="'scheduled-' + index"
            :day="appointment.day"
            :month="appointment.month"
            :specialty="appointment.specialty"
            :doctor="appointment.doctor"
            :time="appointment.time"
          />
        </div>
        <h2>CITAS REALIZADAS</h2>
        <div class="completed-appointments" ref="completedAppointments">
          <cardDate class="card-date"
            v-for="(appointment, index) in completedAppointmentsList"
            :key="'completed-' + index"
            :day="appointment.day"
            :month="appointment.month"
            :specialty="appointment.specialty"
            :doctor="appointment.doctor"
            :time="appointment.time"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.personal-data {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.user-data {
  flex: 40%;
  margin-top: 20px;
  margin-bottom: 20px;
}

.calendar {
  flex: 60%;
}

.appointments {
  width: 30%;
  background-color: #ffffff;
  border-radius: 15px;
  border: 1px solid white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05), 4px 4px 8px rgba(0, 0, 0, 0.025);
  padding: 20px;
  margin: 20px 20px 0 40px;
}

.appointments-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100%;

  h2 {
    font-size: 1.1em;
    font-weight: bold;
    color: #4172F2;
  }
}

.scheduled-appointments {
  width: 100%; 
  padding-left: 5px;
  padding-right: 10px;
  margin-top: 15px;
  height: 55%;
}

.completed-appointments {
  width: 100%; 
  padding-left: 5px;
  padding-right: 10px;
  margin-top: 15px;
  height: 35%;
}

.card-date {
  margin-bottom: 15px;
}

</style>