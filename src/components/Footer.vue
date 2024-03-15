<template>
    <footer class="footer">
      <p>Desenvolvido por <a href="https://www.linkedin.com/in/lucas-ciankoski/" class="custom-link">Lucas Iankoski</a></p>
      <p>&copy; 2024 - Versão 1.0.1</p>
    </footer>
</template>
  
  <script>
  export default {
    name: 'Footer',
  }
  </script>
  
  <style scoped>
  .footer {
    font-family: sans-serif;
    background-color: #f8f9fa;
    text-align: center;
    padding: 20px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    margin-top: 10%;
  }
  
  .custom-link {
    color: inherit;
    text-decoration: none; 
  }
  
  .custom-link:hover {
    text-decoration: underline; 
  }
  </style>
  
  