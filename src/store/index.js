/**
 * Created by championswimmer on 09/05/17.
 */
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);


export default new Vuex.Store({
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
