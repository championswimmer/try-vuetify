/**
 * Created by championswimmer on 10/05/17.
 */

export default {
  state: {
    open: true,
    entries: [
      {icon: "swap_vert", title: "Leaderboard", link:"/leaderboard"},
      {icon: "description", title:"Rules", link:'/rules'}
    ]
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
