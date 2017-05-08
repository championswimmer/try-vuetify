<template>
  <v-toolbar class="red">
    <v-toolbar-side-icon @click.native.stop="toggleSidebar" />
    <v-toolbar-title> BOSS </v-toolbar-title>
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
