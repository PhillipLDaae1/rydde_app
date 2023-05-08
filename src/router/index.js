import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TasksView from '../views/TasksView.vue'
import StatisticsView from '../views/StatisticsView.vue'
import LogInPageView from '../views/LogInPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: TasksView,
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: StatisticsView,
    },
    {
      path: '/login',
      name: 'LogInPage',
      component: LogInPageView,
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/login',
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !document.cookie.includes('user=')) {
    next('/login');
  } else {
    next();
  }
});


export default router
