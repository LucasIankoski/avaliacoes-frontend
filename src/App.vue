<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
name: 'App'
import Header from './components/Header.vue'
import Turmas from './components/Turmas.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}



</style>
