<script setup lang="ts">
import { ref } from 'vue';
const selectedIMC = ref('');
const optionsIMC = ref([
    { value: "obesidad morbosa", text: "Obesidad Morbosa" },
    { value: "obesidad", text: "Obesidad" },
    { value: "sobrepeso", text: "Sobrepeso" },
    { value: "normal", text: "Normal" },
    { value: "delgadez", text: "Delgadez" },
    { value: "delgadez severa", text: "Delgadez Severa" },
]);
</script>

<template>
    <div class="card">
        <div class="header">
            <h1 class="title">Constantes vitales</h1>
        </div>
        <div class="content">
            <div class="content-row">
                <div class="content-input">
                    <div class="title">
                        <h1>Temperatura</h1>
                    </div>
                    <div class="inputs">
                        <div class="custom-input">
                          <label>Valor</label>
                          <input
                            type="text"
                            placeholder="Ingrese el valor..."
                          />
                        </div>
                        <div class="custom-input">
                          <label>Medida</label>
                          <input
                            type="text"
                            placeholder="Ingrese la medida..."
                          />
                        </div>
                    </div>
                </div>
                <div class="content-input">
                    <div class="title">
                        <h1>Presión arterial</h1>
                    </div>
                    <div class="inputs">
                        <div class="custom-input">
                          <label>Valor</label>
                          <input
                            type="text"
                            placeholder="Ingrese el valor..."
                          />
                        </div>
                        <div class="custom-input">
                          <label>Medida</label>
                          <input
                            type="text"
                            placeholder="Ingrese la medida..."
                          />
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-row" style="margin-top: 5px;">
                <div class="content-input">
                    <div class="title">
                        <h1>Saturación</h1>
                    </div>
                    <div class="inputs">
                        <div class="custom-input">
                          <label>Valor</label>
                          <input
                            type="text"
                            placeholder="Ingrese el valor..."
                          />
                        </div>
                        <div class="custom-input">
                          <label>Medida</label>
                          <input
                            type="text"
                            placeholder="Ingrese la medida..."
                          />
                        </div>
                    </div>
                </div>
                <div class="content-input">
                    <div class="title">
                        <h1>Frecuencia cardíaca</h1>
                    </div>
                    <div class="inputs">
                        <div class="custom-input">
                          <label>Valor</label>
                          <input
                            type="text"
                            placeholder="Ingrese el valor..."
                          />
                        </div>
                        <div class="custom-input">
                          <label>Medida</label>
                          <input
                            type="text"
                            placeholder="Ingrese la medida..."
                          />
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-row" style="margin-top: 5px;">
                <div class="content-input">
                    <div class="title">
                        <h1>Frecuencia respiratoria</h1>
                    </div>
                    <div class="inputs">
                        <div class="custom-input">
                          <label>Valor</label>
                          <input
                            type="text"
                            placeholder="Ingrese el valor..."
                          />
                        </div>
                        <div class="custom-input">
                          <label>Medida</label>
                          <input
                            type="text"
                            placeholder="Ingrese la medida..."
                          />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card" style="margin-top:15px;">
        <div class="header">
            <h1 class="title">Datos antropométricos</h1>
        </div>
        <div class="content">
            <div class="content-row">
                <div class="content-input">
                    <div class="title">
                        <h1>Peso</h1>
                    </div>
                    <div class="inputs">
                        <div class="custom-input">
                          <label>Valor</label>
                          <input
                            type="text"
                            placeholder="Ingrese el valor..."
                          />
                        </div>
                        <div class="custom-input">
                          <label>Medida</label>
                          <input
                            type="text"
                            placeholder="Ingrese la medida..."
                          />
                        </div>
                    </div>
                </div>
                <div class="content-input">
                    <div class="title">
                        <h1>Talla</h1>
                    </div>
                    <div class="inputs">
                        <div class="custom-input">
                          <label>Valor</label>
                          <input
                            type="text"
                            placeholder="Ingrese el valor..."
                          />
                        </div>
                        <div class="custom-input">
                          <label>Medida</label>
                          <input
                            type="text"
                            placeholder="Ingrese la medida..."
                          />
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-row" style="margin-top: 5px;">
                <div class="content-input">
                    <div class="title">
                        <h1>Perímetro abdominal</h1>
                    </div>
                    <div class="inputs">
                        <div class="custom-input">
                          <label>Valor</label>
                          <input
                            type="text"
                            placeholder="Ingrese el valor..."
                          />
                        </div>
                        <div class="custom-input">
                          <label>Medida</label>
                          <input
                            type="text"
                            placeholder="Ingrese la medida..."
                          />
                        </div>
                    </div>
                </div>
                <div class="content-input">
                    <div class="title">
                        <h1>Superficie corporal</h1>
                    </div>
                    <div class="inputs">
                        <div class="custom-input">
                          <label>Valor</label>
                          <input
                            type="text"
                            placeholder="Ingrese el valor..."
                          />
                        </div>
                        <div class="custom-input">
                          <label>Medida</label>
                          <input
                            type="text"
                            placeholder="Ingrese la medida..."
                          />
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-row" style="margin-top: 5px;">
                <div class="content-input" style="width: 100%;">
                    <div class="title">
                        <h1>IMC</h1>
                    </div>
                    <div class="inputs">
                        <div class="custom-input">
                            <label>Valor</label>
                            <input
                              type="text"
                              placeholder="Ingrese el valor..."
                            />
                        </div>
                        <div class="custom-input">
                            <label>Clasificación IMC</label>
                            <select v-model="selectedIMC">
                              <option value="" disabled selected>Seleccione una clasificación</option>
                              <option v-for="option in optionsIMC" :key="option.value" :value="option.value">
                                {{ option.text }}
                              </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
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
}
.content {
    padding: 20px;
}
.content-row {
    display: flex;
    justify-content: space-between;    
}
.content-input {
    width: 49%;
}
.title h1 {
    font-weight: bold;
    color: #A0B9F9;
}
.inputs {
    display: flex;
    justify-content: space-between;
}
.custom-input {
  position: relative;
  margin: 10px 0px;
  width: 49%;
  input[type="text"] {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
  input[type="text"]:focus {
    border-color: white;
    --tw-ring-color: #ccc;
  }
  select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
  select:focus {
    border-color: white;
    --tw-ring-color: #ccc;
  }
  label {
    position: absolute;
    left: 0.5rem;
    top: -11px;
    transition: all 0.2s;
    color:#ccc;
    pointer-events: none;
    background-color: white;
    font-size: smaller;
    padding: 0 2px;
  }
}
</style>