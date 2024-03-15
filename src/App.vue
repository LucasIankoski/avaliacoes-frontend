<template>
  <div>
    <Header />
    <router-view class="main-content" />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.main-content {
  margin-top: 200px; 
}
</style>
