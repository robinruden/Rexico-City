import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import CalendarPage from '@/views/CalendarPage.vue'
import TicketsPage from '@/views/TicketsPage.vue'
import TicketsNextPage from '@/views/TicketsNextPage.vue'
import SearchPage from '@/views/SearchPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage,
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: CalendarPage,
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: TicketsPage,
  },
  {
    path: '/tickets/:id',
    name: 'Card',
    component: TicketsNextPage,
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchPage,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
