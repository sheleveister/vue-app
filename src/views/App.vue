<template>
  <div id="app">
    <h1>{{ msg }}</h1>

    <header>
      <div class="header-wrapper">
        <img src="../assets/logo.png" alt="Logo" class="logo">

        <nav>
          <router-link to="/brand">Brand</router-link>
          <router-link to="/projects">Projects</router-link>
          <router-link to="/contacts">Contacts</router-link>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
