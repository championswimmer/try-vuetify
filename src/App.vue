<template>
  <v-app id="app">
    <app-toolbar></app-toolbar>
    <main>
      <app-sidebar></app-sidebar>
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
  import AppToolbar from './components/AppToolbar.vue'
  import AppSidebar from './components/AppSidebar.vue'
  export default {
    name: 'app',
    components: {
        AppToolbar, AppSidebar
    }
  }
</script>

<style>

</style>
