<template>
  <header>
    <img src="https://social.redemarista.org.br/colegio/eja-vettorello/SiteAssets/marcas_maristas.png" alt="Maristas Logo" class="logo"/>
    <nav>
      <ul>
        <li><a href="/home">Inicio</a></li>
        <li><a href="/home">Área do professor</a></li>     
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
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
}

.logo {
  max-height: 40px; /* Set a maximum height for the logo */
  margin-right: 20px; /* Adjust the margin if needed */
}
</style>
