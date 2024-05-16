<script setup langs="ts">
const props = defineProps({
  day: String,
  month: String,
  specialty: String,
  doctor: String,
  time: String
});
</script>

<template>
  <div class="appointment-card">
    <div class="date">
      <span>{{ day }}</span>
      <small>{{ month }}</small>
    </div>
    <div class="details">
      <h3>{{ specialty }}</h3>
      <p>{{ doctor }}</p>
      <p>{{ time }}</p>
    </div>
  </div>
</template>

<style scoped>
.appointment-card {
  display: flex;
  background: linear-gradient(to right, #585dcf, #8a8ff9);
  color: white;
  border-radius: 10px;
  box-sizing: border-box;
  width: 100%;
  font-family: Arial, sans-serif;
  align-items: center;
  height: 83px;
}

.date {
  background: #ffffff;
  color: #2a5298;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  margin-right: 15px;
  margin-left: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  line-height: 1;
  justify-content: center;

  span {
    font-size: 25px;
    font-weight: bold;
    color: #4172F2;
  }
  small {
    font-size: 12px;
  }
}

.details {
  margin-top: 10px;
  margin-bottom: 10px;
  p {
    font-size: 12px;
    margin: 1px 0;
  }
  h3 {
    margin: 0;
    font-weight: bold;
    font-size: 16px;
  }
}
</style>