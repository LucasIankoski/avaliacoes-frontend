import { createRouter, createWebHistory } from 'vue-router';
import Turmas from './components/Turmas.vue';
import Componentes from './components/Componentes.vue';

const routes = [
  {
    path: '/',
    name: 'Turmas',
    component: Turmas
  },
  {
    path: '/componentes/:codigoTurma',
    name: 'Componentes',
    component: Componentes
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
