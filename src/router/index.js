import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TasksView from '../views/TasksView.vue'
import StatisticsView from '../views/StatisticsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },

    {
      path: '/tasks',
      name: 'Tasks',
      component: TasksView
    },

    {
      path: '/statistics',
      name: 'Statistics',
      component: StatisticsView
    }
  
  ]
})

export default router
