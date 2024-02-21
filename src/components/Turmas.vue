<template>
    <div>
      <h2>Selecione a sua turma</h2>
      <div class="cards-container">
        <div v-for="turma in turmas" :key="turma.id" class="card">
          <p>{{ turma.codigo }}</p>
        </div>
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
    justify-content: space-around;
    gap: 20px;
    margin-top: 20px;
  }
  
  .card {
    background-color: #003a63;
    border: 1px solid #003a63;
    border-radius: 8px;
    color: hsl(0, 0%, 100%);
    padding: 15px; 
    width: 150px; 
    height: 70px; 
    transition: background-color 0.3s ease;
    font-size: 20px;
    text-align: center;
    &:hover {
      background-color: white;
      color: #003a63;
    }
  }
  </style>
  