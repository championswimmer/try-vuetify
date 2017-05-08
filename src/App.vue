<template>
  <v-app id="app">
    <v-toolbar>
      <v-toolbar-title>Toolbar</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
    <v-footer>Footer</v-footer>
  </v-app>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
  #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
