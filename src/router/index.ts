import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "@/views/index.vue"
import ProfessionalCard from "@/views/professionalCard.vue"
import ComissionEmploi from "@/views/commissionCard.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component:Dashboard,
      name:'dashboard'

    },
    {
      path: '/cartes-professionnelles',
      component:ProfessionalCard,
      name:'professionalCard'

    },
    {
      path: '/comission-emploi',
      component:ComissionEmploi,
      name:'otherCard'

    },

  ]
})

export default router
