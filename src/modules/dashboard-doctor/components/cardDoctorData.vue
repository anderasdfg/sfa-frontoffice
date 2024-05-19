<script setup lang="ts">
const imgSrc = 'https://cdn.discordapp.com/attachments/750116396632899704/1240094286389706834/healthcare-medical-staff-concept-portrait-600nw-2281024823.png?ex=664b3e0d&is=6649ec8d&hm=cd20d4ba425def9788d916ae896358e868816c41d2ebb195035fa171e75c2127&';
const phone = '(+51) 998865684';
const email = 'jalejandro04072000@gmail.com';
</script>

<template>
  <div class="card">
    <div class="image">
      <img :src="imgSrc">
    </div>
    <div class="data">
        <h2> {{ 'José Alejandro' }} {{ 'Paredes' }} {{ 'Mesias'}} </h2>
        <p class="subtitle">{{ 'Traumatologo' }}</p>
        <p><strong class="field">Teléfono:</strong> <span>{{ phone }}</span></p>
        <p><strong class="field">Correo:</strong> <span>{{ email }}</span></p>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #ffffff;
  border-radius: 15px;
  border: 1px solid white;
  padding: 20px;
  display: flex;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05), 4px 4px 8px rgba(0, 0, 0, 0.025);
}

.image {
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}

.image img {
  max-width: 80%;
  height: 138px;
  display: block;
  border-radius: 5px;
}

.data {
  width: 60%;
  margin-right: 20px;
  h2 {
    font-size: 24px;
  }
  .subtitle {
    margin: 0 0 20px 0;
  }
  .field {
    color: #4172F2;
    font-size: 14px;
  }
}
</style>