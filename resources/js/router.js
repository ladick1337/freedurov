import { createWebHistory, createRouter } from 'vue-router'

// import MainPage from './pages/MainPage.vue'
import Power from './pages/Power.vue'
import Finance from './pages/Finance.vue'
import Freedom from './pages/Freedom.vue'
import Shield from './pages/Shield.vue'

const routes = [
  { path: '/', name: 'power', component: Power },
  { path: '/finance', name: 'finance', component: Finance },
  { path: '/freedom', name: 'freedom', component: Freedom },
  { path: '/shield', name: 'shield', component: Shield },
//   { path: '/power', component: Power },
//   { path: '/finance', component: Finance },
//   { path: '/shield', component: Shield },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
