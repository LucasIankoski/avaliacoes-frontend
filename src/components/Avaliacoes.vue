<template>
  <div>
    <h2 class="titulo">Atividades</h2>
    <div class="cards-container">
      <div v-for="avaliacao in avaliacoes" :key="avaliacao.id">
        <div class="card" @click="abrirDetalhes(avaliacao.hyperlink)">
          <p class="avaliacao-titulo">{{ avaliacao.titulo }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const avaliacoes = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8081/avaliacao`, {
      params: {
        turma: route.params.codigoTurma,
        componente: route.params.descricaoComponente,
      },
    });
    avaliacoes.value = response.data;
  } catch (error) {
    console.error('Erro ao carregar avaliações:', error);
  }
});

const abrirDetalhes = (hyperlink) => {
  window.open(hyperlink, '_blank');
};
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  margin-left: 20px;
  max-width: 300px;
}

.card {
  background-color: #003a63;
  border: 2px solid #003a63;
  border-radius: 10px;
  color: hsl(0, 0%, 100%);
  padding: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avaliacao-titulo {
  font-size: 20px;
  margin: 0;
}

.card:hover {
  background-color: white;
  color: #003a63;
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
