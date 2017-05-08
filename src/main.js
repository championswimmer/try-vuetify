// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import './assets/stylus/main.styl'

Vue.config.productionTip = false;
Vue.use(Vuex);

Vue.use(Vuetify);
const store = new Vuex.Store({
  state: {
    sidebar: true
  },
  mutations: {
    toggleSidebar (state, val) {
      if (val === undefined) {
        state.sidebar = !state.sidebar;
      } else {
        state.sidebar = val
      }
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store

});
