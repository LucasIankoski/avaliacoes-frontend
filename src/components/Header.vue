<template>
  <header>
    <img src="https://social.redemarista.org.br/colegio/eja-vettorello/SiteAssets/marcas_maristas.png" alt="Maristas Logo" class="logo"/>
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/home" @click.prevent="showUnderDevelopmentMessage">Área do professor</a></li>     
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    showUnderDevelopmentMessage() {
      alert('Esta área ainda está em desenvolvimento.');
    }
  }
}
</script>


<style scoped>
header {
  font-family: sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #003a63;
  color: aqua;
  padding: 10px; 
  box-sizing: border-box; 
  display: flex;
  justify-content: space-between; 
  align-items: center; 
}

nav {
  text-align: right; 
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline;
  margin-left: 20px; 
}

nav a {
  color: aqua;
  text-decoration: none;
  padding: 5px 10px; 
  border-radius: 5px; 
  transition: background-color 0.3s ease; 
}

nav a:hover {
  background-color: #005082; 
  color: white; 
  text-decoration: none; 
}

.logo {
  max-height: 40px; 
  margin-right: 20px; 
}
</style>


