import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import Rules from '../components/rules/Index.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/rules', component: Rules, name: 'Rules'
    }
  ]
})
