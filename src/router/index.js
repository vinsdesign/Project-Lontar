import { createRouter, createWebHistory } from 'vue-router'
import BerandaView1 from '../views/UserView/BerandaView1.vue'
import SejarahLontarView from '@/views/UserView/SejarahLontarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BerandaView1
    },
    {
      path: '/SejarahLontar',
      name: 'sejarah-lontar',
      component: SejarahLontarView
    }
  ]
})

export default router
