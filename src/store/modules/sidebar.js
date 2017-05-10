/**
 * Created by championswimmer on 10/05/17.
 */

export default {
  state: {
    open: true
  },
  mutations: {
    toggleSidebar (state, val) {
      if (val === undefined) {
        state.open = !state.open;
      } else {
        state.open = val
      }
    }
  }
}
