<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script setup>
name: 'App'
import Header from './components/Header.vue'
import Turmas from './components/Turmas.vue'
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}



</style>
