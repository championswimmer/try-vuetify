<template>
  <v-sidebar left fixed drawer v-model="sidebar">
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
      sidebar: {
        get: function () {
          return this.$store.state.sidebar
        },
        set: function (val) {
          this.$store.commit('toggleSidebar', val)
        }
      }
    }
  }
</script>
