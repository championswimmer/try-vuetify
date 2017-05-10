<template>
  <v-sidebar id="left-sidebar" left drawer v-model="sidebarOpen">
    <v-list>
      <v-list-item v-for="i in 3" :key="i">
        <v-list-tile>
          <v-list-tile-title>Item {{ i }}</v-list-tile-title>
        </v-list-tile>
      </v-list-item>
    </v-list>
  </v-sidebar>
</template>

<script>
  export default {
    name: 'app-sidebar',
    computed: {
      sidebarOpen: {
        get: function () {
          return this.$store.state.sidebar.open
        },
        set: function (val) {
          this.$store.commit('toggleSidebar', val)
        }
      }
    }
  }
</script>

<style scoped>
  #left-sidebar {
    padding-top: 64px;
  }
</style>
