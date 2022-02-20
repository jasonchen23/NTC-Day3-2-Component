import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import TodoView from '../views/TodoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users/:userId',
    name: 'user',
    component: UserView,
    children: [
      {
        path: 'todos',
        component: TodoView,
      }

    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
