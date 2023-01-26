<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/disciplinas" style="padding-left: 20px">Disciplinas</RouterLink>
        <RouterLink to="/cuotas" style="padding-left: 20px">Cuotas</RouterLink>
        <RouterLink to="/estadisticas" style="padding-left: 20px">Estadísticas</RouterLink>
        <RouterLink to="/login" style="padding-left: 20px">Login</RouterLink>

      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  padding-left: 20px
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-left: 20px
}

#nav a.router-link-exact-active {
  color: #42b983;
  padding-left: 20px
}
</style>
