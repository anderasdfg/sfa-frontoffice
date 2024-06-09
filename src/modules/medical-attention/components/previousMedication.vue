<script lang="ts" setup>
import { ref, computed } from 'vue';
import customAlert from '@/modules/medical-attention/components/customAlert.vue';
import customDialog from '@/shared/components/customDialog.vue';

type MedicacionPrevia = {
  codigo: string;
  nombre: string;
  dosis: string;
  observaciones: string[];
}

type Medicamento = {
  codigo: string;
  nombre: string;
  concentracion: string;
  formula_farmaceutica: string;
}

const showObsDialog = ref(false);
const showAddDialog = ref(false);
const selectedObservations = ref<string[]>([]);

const searchMedicine = ref('');
const dosis = ref('');
const medicineObs = ref('');
const medicineObsList = ref<string[]>([]);
const adverseReaction = ref('');
const adverseReactionList = ref<string[]>([]);
const medicine = ref<Medicamento>({
  codigo: "",
  nombre: "",
  concentracion: "",
  formula_farmaceutica: ""
});

const loadingSearch = ref(false);
const showSuggestions = ref(false);
const listMedicine = ref([
  {
    "codigo": "5",
    "nombre": "AB AMBROMOX",
    "concentracion": "600 mg",
    "formula_farmaceutica": "Polvo para Solución Inyectable"
  },
  {
    "codigo": "497",
    "nombre": "ALOPURINOL",
    "concentracion": "100 mg",
    "formula_farmaceutica": "Tableta"
  },
  {
    "codigo": "698",
    "nombre": "AMOXIDAL DUO",
    "concentracion": "250 mg/5 mL",
    "formula_farmaceutica": "Polvo para Suspensión Oral"
  },
  {
    "codigo": "812",
    "nombre": "ANTIAX",
    "concentracion": "480 mg + 100 mg",
    "formula_farmaceutica": "Comprimido"
  },
  {
    "codigo": "1132",
    "nombre": "AVAN",
    "concentracion": "80 mg",
    "formula_farmaceutica": "Cápsula"
  },
]);

const filteredItems = computed(() => {
  if (!searchMedicine.value) {
    return [];
  }
  return listMedicine.value.filter((item) =>
    item.nombre.toLowerCase().includes(searchMedicine.value.toLowerCase())
  );
});

const onSearch = () => {
  //loadingSearch.value = true;
  if (searchMedicine.value.length >= 1) {
    showSuggestions.value = true;
  } else {
    showSuggestions.value = false;
  }
  loadingSearch.value = false;
};

const selectItem = (item: Medicamento) => {
  medicine.value = item;
  searchMedicine.value = item.nombre;
  showSuggestions.value = false;
};

const hideSuggestions = () => {
  setTimeout(() => {
    showSuggestions.value = false;
  }, 200);
};

const openObsDialog = (obs: string[]) => {
  selectedObservations.value = obs;
  showObsDialog.value = true;
}
const openAddDialog = () => {
  showAddDialog.value = true;
}

const addMedicineObservation = () => {
  if (medicineObs.value.trim()) {
    medicineObsList.value.push(medicineObs.value);
    medicineObs.value = '';
  }
};

const removeObservation = ( index:number ) => {
  medicineObsList.value.splice(index, 1);
};

const addAdverseReaction = () => {
  if (adverseReaction.value.trim()) {
    adverseReactionList.value.push(adverseReaction.value);
    adverseReaction.value = '';
  }
};

const removeAdverseReaction = ( index:number ) => {
  adverseReactionList.value.splice(index, 1);
};

const props = defineProps<{
  medicacionPrevia: MedicacionPrevia[];
}>()

</script>

<template>
    <div class="card">
      <div class="header">
        <h1 class="title">Medicación previa</h1>
        <button class="add-button" @click="openAddDialog">Agregar</button>
      </div>
      <div class="content">
        <customAlert v-if="medicacionPrevia.length === 0" border-color="#ff7043" text-color="#ff7043">
          <template v-slot:icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 15h2v2h-2zm0-8h2v6h-2zm1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8"/></svg>
          </template>
          <template v-slot:text>
            <span>No se ha registrado ninguna medicación previa</span>
          </template>
        </customAlert>
        <div class="list-item" v-for="(item, i) in medicacionPrevia" :key="i">
            <div class="item-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M6 9h12v2H6m8 3H6v-2h8m4-4H6V6h12"/></svg>
            </div>
            <div class="item-content">
              <div class="item-title">
                {{ item.nombre }}
              </div>
              <div class="item-subtitle">
                Dosis: {{ item.dosis }}
              </div>
            </div>

            <div class="item-action">
              <button class="action-button blue" @click="openObsDialog(item.observaciones)">
                Observaciones
              </button>
              <button class="action-button red">
                Eliminar
              </button>
            </div>
        </div>
      </div>
    </div>
    <div class="card" style="margin-top: 15px;">
      <div class="header">
        <h1 class="title">Reacción adversa</h1>
      </div>
      <div class="content">
        <div class="card-content-input">
          <div class="custom-input">
            <label>Reacción adversa</label>
            <input
              type="text"
              id="adverReaction"
              v-model="adverseReaction"
              placeholder="Ingrese la reacción adversa..."
            />
          </div>
          <button class="add-button-obs" @click="addAdverseReaction">Agregar</button>
        </div>
        <customAlert v-if="adverseReactionList.length === 0" border-color="#ff7043" text-color="#ff7043">
          <template v-slot:icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 15h2v2h-2zm0-8h2v6h-2zm1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8"/></svg>
          </template>
          <template v-slot:text>
            <span>No se ha registrado ninguna reacción adversa</span>
          </template>
        </customAlert> 
        <ul class="list-flat">
          <li v-for="(item, i) in adverseReactionList" :key="i" class="item-list">
            <div class="list-item-content">
              <span>Reacción adversa {{ i + 1 }}: {{ item }}</span>
              <button class="delete-button-m-obs" @click="removeAdverseReaction(i)">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 13H7v-2h10m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <customDialog v-model:show="showObsDialog" width="600px">
      <template v-slot:body>
        <div class="card-title">
          <span class="text-h5">Observaciones de la medicación previa</span>
        </div>
        <div class="card-text">
          <ul class="list-flat">
            <li v-for="(item, i) in selectedObservations" :key="i" class="item-list">
              <div class="list-item-content">
                <span>Observación {{ i + 1 }}: {{ item }}</span>
              </div>
            </li>
          </ul>
        </div>
      </template>
    </customDialog>
    <customDialog v-model:show="showAddDialog" width="600px">
      <template v-slot:body>
        <div class="card-title">
          <span class="text-h5">Agregando medicación previa</span>
        </div>
        <div class="card-text">
          <div class="group-input">
            <div class="custom-input" style="width: 64%;">
              <label>Medicamento</label>
              <input
                type="text"
                id="medicamento"
                v-model="searchMedicine"
                @input="onSearch"
                @blur="hideSuggestions"
                placeholder="Ingrese el medicamento..."
              />
              <div v-if="showSuggestions" class="suggestions">
                <ul v-if="filteredItems.length > 0 && !loadingSearch">
                  <li
                    v-for="(item, index) in filteredItems"
                    :key="index"
                    @click="selectItem(item)"
                  >
                    <span class="avatar">{{ item.nombre.charAt(0) }}</span>
                    <div class="item-details">
                      <span class="title">{{ item.nombre }}</span> {{ " " }}
                      <span class="subtitle">{{ item.concentracion }} - {{ item.formula_farmaceutica }}</span>
                    </div>
                  </li>
                </ul>
                <div v-else-if="filteredItems.length === 0 && !loadingSearch" class="suggestion-info"> 
                  No se encontraron coincidencias
                </div>
                <div v-else-if="loadingSearch" class="suggestion-info"> 
                  Buscando coincidencias...
                </div>
              </div>
            </div>
            <div class="custom-input" style="width: 34%;">
              <label>Dosis</label>
              <input
                type="text"
                id="dosis"
                v-model="dosis"
                placeholder="Ingrese la dosis..."
              />
            </div>
          </div>
          <div class="card">
            <div class="card-dialog-header">
              <div class="custom-input">
                <label>Observación</label>
                <input
                  type="text"
                  v-model="medicineObs"
                  id="observacion"
                  placeholder="Ingrese la observación..."
                />
              </div>
              <button class="add-button-obs" @click="addMedicineObservation">Agregar</button>
            </div> 
            <div class="card-dialog-body">
              <customAlert v-if="medicineObsList.length === 0" border-color="#ff7043" text-color="#ff7043">
                <template v-slot:icon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 15h2v2h-2zm0-8h2v6h-2zm1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8"/></svg>
                </template>
                <template v-slot:text>
                  <span>No se ha registrado ninguna observación</span>
                </template>
              </customAlert> 
              <ul class="list-flat">
                <li v-for="(item, i) in medicineObsList" :key="i" class="item-list">
                  <div class="list-item-content">
                    <span>Observación {{ i + 1 }}: {{ item }}</span>
                    <button class="delete-button-m-obs" @click="removeObservation(i)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 13H7v-2h10m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </template>
    </customDialog>
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
    .list-item {
      display: flex;
      align-items: center;
    }
    .item-avatar {
      margin-right: 20px;
      color: #A0B9F9;
    }
    .item-content {
      flex-grow: 1;
    }
    .item-title {
      font-weight: bold;
    }
    .item-subtitle {
      font-size: 0.9em;
    }
    .action-button {
      margin: 0 5px;
      padding: 5px 20px;
      border-radius: 5px;
      transition: background-color 0.3s;
    }
    .action-button.blue {
      background-color: #A0B9F9;
      color: white;
    }
    .action-button.blue:hover {
      background-color: #657DC4
    }
    .action-button.red {
      background-color: #F24141;
      color: white;
    }
    .action-button.red:hover {
      background-color: darkred
    }
}

.card-title .text-h5 {
  font-size: 1.3rem;
  font-weight: 500;
  color: #4172F2;
}

.card-text {
  padding: 10px 10px 0;
}
.list-flat {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.item-list {
  border-bottom: 1px solid #e0e0e0;
  padding: 8px 0;
}

.list-item-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.group-input{
  display: flex;
  justify-content: space-between;
}
.custom-input {
  position: relative;
  margin: 10px 0px;
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
  .suggestions {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    overflow: hidden;
  }

  .suggestions ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .suggestions li {
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .suggestions li:hover {
    background-color: #f8f8f8;
  }

  .suggestion-info {
    padding: 10px
  }

  .avatar {
    margin-right: 0.5rem;
    background-color: #007bff;
    color: #fff;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-details {
    flex-grow: 1;
  }

  .title {
    font-weight: bold;
  }

  .subtitle {
    font-size: 0.85rem;
    color: #666;
  }
}
.card-dialog-header {
  display: flex;
  margin: 0px 20px;
  padding: 10px 0px 0px;
  justify-content: space-between;

  .custom-input {
    width: 74%;
  }
  .add-button-obs {
    width: 24%;
    margin: 10px 0px;
    border: none;
    border-radius: 5px;
    background-color: #A0B9F9;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }
}
.card-dialog-body {
  margin: 0px 20px;
  padding: 0px 0px 10px;
}
.delete-button-m-obs {
    color: white;
    background-color: #F24141;
    border-radius: 5px;
    padding: 2px 10px;
}
.card-content-input {
  display: flex;
  justify-content: space-between;

  .custom-input {
    width: 84%;
  }
  .add-button-obs {
    width: 14%;
    margin: 10px 0px;
    border: none;
    border-radius: 5px;
    background-color: #A0B9F9;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }
}
</style>