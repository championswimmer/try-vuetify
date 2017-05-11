<template>
  <v-toolbar>
    <v-toolbar-side-icon class="hidden-lg-and-up" @click.native.stop="toggleSidebar" />
    <v-toolbar-title>
      <router-link to="/">
          <v-btn flat dark large>
            <v-icon>home</v-icon>
            BOSS</v-btn>
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn icon dark>
        <v-icon>account_circle</v-icon>
      </v-btn>
      <v-menu bottom origin="top right" transition="v-scale-transition">
        <v-btn dark icon slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-item>
            <v-list-tile>
              <v-list-tile-title>Change Account</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title>Invite Friends</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title>Log Out</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>

</template>

<script>
  export default {
    name: 'app-toolbar',
    //props: ['sidenav'],
    methods: {
      toggleSidebar: function(event) {
        this.$store.commit('toggleSidebar')
      }
    }
  }
</script>

<style>
  .toolbar__title a {
    color: white;
    text-decoration: none;
  }
</style>
