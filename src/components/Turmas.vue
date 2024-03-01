<template>
  <div>
    <h2 class="titulo">Selecione a sua turma</h2>
    <div class="cards-container">
      <router-link
        v-for="turma in turmas"
        :key="turma.id"
        :to="{ name: 'Componentes', params: { codigoTurma: turma.codigo } }"
        class="router-link"
      >
        <div class="card">
          <p class="turma-codigo">{{ turma.codigo }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const turmas = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8081/turma');
    turmas.value = response.data;
  } catch (error) {
    console.error('Erro ao carregar turmas:', error);
  }
});
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
  margin-left: 20px; 
  max-width: 600px;
}

.card {
  background-color: #003a63;
  border: 2px solid #003a63;
  border-radius: 10px;
  color: hsl(0, 0%, 100%);
  padding: 20px;
  width: 80px;
  height: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.turma-codigo {
  font-size: 24px;
  margin: 0;
}

.card:hover {
  background-color: white;
  color: #003a63;
}


.router-link {
  text-decoration: none;
  color: inherit;
}


.titulo {
  font-style: italic;
  font-family: sans-serif;
  font-weight: 550;
  color: #011f34;
  font-size: 30px;
  text-align: left;
  margin-left: 20px;
  margin-top: 90px;
  margin-bottom: 5px;
}
</style>
