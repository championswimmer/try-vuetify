<template>
  <v-sidebar id="left-sidebar" left fixed v-model="sidebarOpen">
    <v-list>
      <v-list-item  v-for="e in entries" :key="e.title">
          <v-list-tile :href="e.link" ripple router="true">
            <!--<router-link :to="e.link">-->
            <v-list-tile-avatar>
              <v-icon>{{ e.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title router="true">{{ e.title }}</v-list-tile-title>
            </v-list-tile-content>
            <!--</router-link>-->
        </v-list-tile>
      </v-list-item>
    </v-list>
  </v-sidebar>
</template>

<script>
  export default {
    name: 'app-sidebar',
    data: function () {
      return {
        entries: this.$store.state.sidebar.entries
      }
    },
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

<style scoped lang="stylus">
  @import "../assets/stylus/theme.styl";
  .sidebar .list__tile--active .list__tile__title {
    color: $theme.primary
  }
  .list__tile--active {
    background: rgba(0,0,0,0.12)
  }
</style>
